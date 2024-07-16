const express = require('express')
const router = express.Router()
const redis = require('../redis')

router.get('/', async (req, res) => {
    const todoValue = await redis.getAsync('added_todos')
    res.json({
        added_todos: Number(todoValue) || 0
    })
})

module.exports = router