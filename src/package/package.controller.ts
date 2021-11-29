import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
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
        return res.status(HttpStatus.OK).send(packageList)
    }

    @Get('/by-product/:product_id')
    async getPackagesByProductId(@Param('product_id') product_id: number, @Res() res){
        const packagesFound = await this.packageService.getPackagesByProductId(product_id);
        return res.status(HttpStatus.OK).send(packagesFound)
    }

    /**
    @Post()
    async createPackage(@Res() res, @Body() createPackage: CreatePackageDTO){
        const createdPackage = await this.packageService.createPackage(createPackage);
        return res.status(HttpStatus.CREATED).json({
            message: 'Created',
            data: createdPackage
        })
    }
    */
}
