import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config/constants';
import { CustomerModule } from './customer/customer.module';
import { PackageModule } from './package/package.module';
import { AFeatureModule } from './a-feature/a-feature.module';
import { QuoteDetailModule } from './quote-detail/quote-detail.module';
import { QuoteModule } from './quote/quote.module';
import { DetailFeatureXquoteProductModule } from './detail-feature-xquote-product/detail-feature-xquote-product.module';
import { FeaturesByPackageModule } from './features-by-package/features-by-package.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    //Para configurar la conexion a la base de datos usando los datos del archivo src/config/constants.ts
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get<string>(DB_HOST),
        port: +configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USER),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_DATABASE),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false, //true
      }),
      inject: [ConfigService],
    }),
    ProductModule,
    CustomerModule,
    PackageModule,
    AFeatureModule,
    QuoteDetailModule,
    QuoteModule,
    DetailFeatureXquoteProductModule,
    FeaturesByPackageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
