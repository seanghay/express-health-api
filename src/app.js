const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')

const app = express();

app.use(cors())
app.use(helmet())
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/health', async (req, res) => {
    
  const time = Date.now();

  // just an example
  const [db, redis] = await Promise.all([
    delay(300),
    delay(500),
  ])

  res.json({
    elapsedTimeMs: `${Date.now() - time}ms`,
    db,
    redis: true,
  })
})


async function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), duration);
  })
}


app.get('/', (req, res) => {
  return res.json({
    time: new Date(),
    message: 'everything is okay',
  });
})



module.exports = app;