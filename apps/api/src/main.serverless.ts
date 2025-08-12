// apps/fugitive-api/src/main.serverless.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { INestApplication } from '@nestjs/common';

let cachedServer: any;

// Helper to setup CORS and other global settings
const setupApp = (app: INestApplication) => {
  app.enableCors({
    origin: '*', // Adjust for your production needs
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });
  // Add any other global middleware or setup here
};

export const handler = async (event: any, context: any) => {
  if (!cachedServer) {
    const nestApp = await NestFactory.create(AppModule);
    setupApp(nestApp);
    await nestApp.init();
    cachedServer = serverlessExpress({ app: nestApp.getHttpAdapter().getInstance() });
  }

  return cachedServer(event, context);
};