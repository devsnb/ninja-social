import express from 'express'

const application = () => {
	const app = express()

	// Parsing the incoming request body
	app.use(express.json())
	app.use(
		express.urlencoded({
			extended: false
		})
	)

	return app
}

export default application
