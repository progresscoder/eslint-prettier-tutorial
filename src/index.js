import express from 'express'

const port = 3000
const server = express()

server.get('/', (req, res) => {
    res.send('Hello User')
})

server.listen(port, () => {
    console.log('Welcome') // eslint-disable-line
    console.log(`Listening to port ${port}`) // eslint-disable-line
})
