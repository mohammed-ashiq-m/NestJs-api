import {Injectable} from "@nestjs/common";

import {Product} from './product.model'
@Injectable()
export class ProductService {
        products: Product[] = [];
        insertProduct(name:String, email: String, password: number){
                var prodId = new Date().toString();
                var newProduct = new Product(proId,name,email,password);
                this.products.push(newProduct);
                return prodId;
        }
    }
