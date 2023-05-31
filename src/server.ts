import mongoose from 'mongoose'
import app from './app'
import config from './config'
async function main() {
  try {
    await mongoose.connect(config.data_url as string)
    console.log('database connected successfully')
    app.listen(config.port, () => {
      console.log('my port is', config.port)
    })
  } catch (error) {
    console.log(error)
  }
}

main()
