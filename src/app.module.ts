import { Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';

import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { CategoriesModule } from 'categories/categories.module';
import { CartModule } from 'cart/cart.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../static'),
      serveRoot: '/static/',
    }),
    CategoriesModule,
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
