import { Module } from '@nestjs/common';
import { FeaturesByPackageController } from './features-by-package.controller';
import { FeaturesByPackageService } from './features-by-package.service';

@Module({
  controllers: [FeaturesByPackageController],
  providers: [FeaturesByPackageService]
})
export class FeaturesByPackageModule {}
