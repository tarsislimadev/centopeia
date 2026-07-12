const router = require('express').Router()

router.get('/', (req, res) => res.json({ message: 'Welcome to the centopeia API 0.1.0' }))

router.get('/health', (req, res) => res.json({ message: 'API is healthy' }))

module.exports = router
