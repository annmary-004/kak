const mongoose = require('mongoose');

let isConnected = false;

async function connectToDatabase() {
  if (isConnected || !process.env.MONGO_URI) return;
  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
  } catch (err) {
    console.warn('MongoDB connection warning:', err.message);
  }
}

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  company: { type: String, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, trim: true },
  service: { type: String, trim: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['new', 'contacted', 'converted', 'closed'], default: 'new' },
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const { name, company, email, phone, service, message } = req.body || {};

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          message: 'Name, email and project description are required.',
        });
      }

      try {
        await connectToDatabase();
        if (isConnected) {
          const newContact = new Contact({ name, company, email, phone, service, message });
          await newContact.save();
        }
      } catch (dbErr) {
        console.warn('Could not persist to MongoDB, logged request:', { name, email, service });
      }

      return res.status(201).json({
        success: true,
        message: 'Thank you for reaching out! The KAK Instant Solutions team will contact you shortly.',
      });
    } catch (err) {
      console.error('Contact handler error:', err);
      return res.status(500).json({ success: false, message: 'Server error processing request.' });
    }
  }

  if (req.method === 'GET') {
    try {
      await connectToDatabase();
      if (isConnected) {
        const inquiries = await Contact.find().sort({ createdAt: -1 });
        return res.status(200).json({ success: true, count: inquiries.length, data: inquiries });
      }
      return res.status(200).json({ success: true, count: 0, data: [] });
    } catch (err) {
      return res.status(500).json({ success: false, message: 'Could not fetch records.' });
    }
  }

  return res.status(405).json({ success: false, message: 'Method Not Allowed' });
};
