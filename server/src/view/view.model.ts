import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ViewController } from './view.controller';
import { ViewService } from './view.service';

@Module({
  controllers: [ViewController],
  providers: [ViewService],
})
export class ViewModule {}
