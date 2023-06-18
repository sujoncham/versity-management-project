import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorLogger, logger } from './shared/logger';

let server: Server;
process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});
async function main() {
  try {
    await mongoose.connect(config.data_url as string);
    logger.info('database connected successfully');
    server = app.listen(config.port, () => {
      logger.info('my port is', config.port);
    });
  } catch (error) {
    errorLogger.error(error);
  }

  // process.on('unhandledRejection', error => {
  //   // eslint-disable-next-line no-console
  //   console.log('unhandled rejection detected, we are closing server .....');
  //   if (server) {
  //     server.close(() => {
  //       errorLogger.error(error);
  //       process.exit(1);
  //     });
  //   } else {
  //     process.exit(1);
  //   }
  // });
}

main();

process.on('SIGTERM', () => {
  logger.info('Sigterm is recieved');
  if (server) {
    server.close();
  }
});
