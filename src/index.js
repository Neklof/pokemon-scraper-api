const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 5000

app.use(cors)

app.get("/", (request, response, next) => {
	response.status(200)
})

app.use((request, response) => {
	response.status(404).end()
})

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}/`)
})
