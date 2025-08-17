import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonTypeModule } from './pokemon-type/pokemon-type.module';

@Module({
  imports: [PokemonTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
