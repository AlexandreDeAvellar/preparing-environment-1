import express, { Request, Response } from 'express'

const app = express()
const port = 3000

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
