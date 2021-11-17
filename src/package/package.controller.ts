import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { PackageService } from './package.service';

@Controller('package')
export class PackageController {
    constructor(private readonly packageService: PackageService){}

    @Get(':package_id')
    async getPackage(@Res() res,@Param('package_id') package_id: number){
        const packageOne = await this.packageService.getPackageById(package_id);
        return res.status(HttpStatus.OK).json({
            data: packageOne
        })
    }

    @Get()
    async getPackages(@Res() res){
        const packageList = await this.packageService.getAll();
        return res.status(HttpStatus.OK).json({
            data: packageList
        })
    }
}
