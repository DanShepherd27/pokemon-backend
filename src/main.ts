import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Pokemon API')
    .setDescription('API for managing Pokemon data')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const portNumber = process.env.PORT ?? 3001;
  await app.listen(portNumber);

  Logger.log(
    'Application is running on: http://localhost:' + portNumber,
    'Bootstrap',
  );
  Logger.log(`Swagger UI: http://localhost:${portNumber}/api`, 'Bootstrap');
}
void bootstrap();
