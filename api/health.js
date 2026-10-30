module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    status: 'ok',
    service: 'KAK Instant Solutions Backend (Vercel Serverless)',
    timestamp: new Date().toISOString(),
  });
};
