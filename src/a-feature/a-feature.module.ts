import { Module } from '@nestjs/common';
import { AFeatureController } from './a-feature.controller';
import { AFeatureService } from './a-feature.service';

@Module({
  controllers: [AFeatureController],
  providers: [AFeatureService]
})
export class AFeatureModule {}
