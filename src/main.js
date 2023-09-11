import application from './app.js'
import config from './config/index.js'
import connectDB from './initializers/mongoose.js'
import logger from './common/logger.js'

/**
 * entry to our application
 */
const main = async () => {
	const PORT = config.get('port')

	// connect to the database
	await connectDB()

	// bootstrap the application
	const app = application()

	app.listen(PORT, () => {
		logger.info(`application started on port: ${PORT}`)
	})
}

main()
