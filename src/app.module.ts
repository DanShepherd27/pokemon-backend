import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonTypeModule } from './modules/pokemon-type/pokemon-type.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PokemonTypeModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
