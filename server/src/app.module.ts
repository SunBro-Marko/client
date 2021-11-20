import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ViewModule } from './view/view.model';

const configModule = ConfigModule.forRoot({
  isGlobal: true,
});

@Module({
  imports: [configModule, ViewModule],
})
export class AppModule {}
