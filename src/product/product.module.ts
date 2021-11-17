import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackageEntity } from 'src/package/entities/package.entity';
import { PackageModule } from 'src/package/package.module';
import { ProductEntity } from './entities/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, PackageEntity]), PackageModule],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
