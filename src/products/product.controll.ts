import {Controller, Post, Body} from "@nestjs/common";

import {ProductService} from "./product.service";

@Controller('product')
export class PoductController{

    constructor(private readonly productServices : ProductServices)

    @Post()
    addProduct(@Body('title')prodName:string,
               @Body('email')prodemail:string,
               @Body('password')prodpassword:number,
    ) : any {
        this.productServices.insertProduct(prodName,prodemail,prodpassword);
    }
}
