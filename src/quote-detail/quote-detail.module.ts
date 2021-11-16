import { Module } from '@nestjs/common';
import { QuoteDetailController } from './quote-detail.controller';
import { QuoteDetailService } from './quote-detail.service';

@Module({
  controllers: [QuoteDetailController],
  providers: [QuoteDetailService]
})
export class QuoteDetailModule {}
