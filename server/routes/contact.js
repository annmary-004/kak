const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')

// POST /api/contact - submit contact inquiry
router.post('/', async (req, res) => {
  try {
    const { name, company, email, phone, service, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and project description are required.',
      })
    }

    // Try saving if database is available
    try {
      const newContact = new Contact({ name, company, email, phone, service, message })
      await newContact.save()
    } catch (dbErr) {
      console.warn('Database note: Could not persist to Mongo, logging instead:', { name, email, service })
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! The KAK Instant Solutions team will contact you shortly.',
    })
  } catch (err) {
    console.error('Contact endpoint error:', err)
    return res.status(500).json({ success: false, message: 'Server error processing request.' })
  }
})

// GET /api/contact - retrieve inquiries
router.get('/', async (req, res) => {
  try {
    const inquiries = await Contact.find().sort({ createdAt: -1 })
    res.json({ success: true, count: inquiries.length, data: inquiries })
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not fetch records.' })
  }
})

module.exports = router
