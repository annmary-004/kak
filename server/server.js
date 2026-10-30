const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middlewares
app.use(cors())
app.use(express.json())

// Health API
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'KAK Instant Solutions Backend', timestamp: new Date() })
})

// Contact Routes
app.use('/api/contact', require('./routes/contact'))

// Graceful start
const startServer = async () => {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI)
      console.log('✅ Connected to MongoDB')
    } else {
      console.log('ℹ️ Running in standalone mode without Mongo connection')
    }
  } catch (err) {
    console.warn('⚠️ MongoDB connection warning:', err.message)
  }

  app.listen(PORT, () => {
    console.log(`🚀 KAK API server listening at http://localhost:${PORT}`)
  })
}

startServer()
