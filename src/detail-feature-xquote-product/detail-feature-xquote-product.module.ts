import { Module } from '@nestjs/common';
import { DetailFeatureXquoteProductController } from './detail-feature-xquote-product.controller';
import { DetailFeatureXquoteProductService } from './detail-feature-xquote-product.service';

@Module({
  controllers: [DetailFeatureXquoteProductController],
  providers: [DetailFeatureXquoteProductService]
})
export class DetailFeatureXquoteProductModule {}
