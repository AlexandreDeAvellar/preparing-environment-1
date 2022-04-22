import express, { Request, Response } from 'express'
import 'dotenv/config'
const app = express()
const port = process.env.SERVER_PORT

app.get('/', (request: Request, response: Response) => {
  response.status(200).json({
    body: {
      message: 'Server running'
    }
  })
})

app.listen(port, () =>
  console.log(`server running in http://localhost:${port}`)
)
