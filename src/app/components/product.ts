import {Component} from '@angular/core';
import {Product,ProductService} from "../services/product-service";
import {MockProductService} from "../services/product-service";

const IS_DEV_ENVIRONMENT:boolean = true;
@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styles: ['h2 {color:#d17581;}'],
})

export class ProductComponent {
    product:Product;
    title:String = 'Компонент называется: ProductComponent';

    constructor(productService:ProductService) {
        this.product = productService.getProduct();
    }
}


@Component({
    selector: 'product2',
    providers: [{
        provide: ProductService,
        useFactory: (isDev)=> {
            if (isDev) {
                return new MockProductService()
            } else {
                return new ProductService();
            }
        },
        deps: ['IS_DEV_ENVIRONMENT']
    }],
    templateUrl: './product.component.html',
    styles: ['h2 {color:green;}'],
})
export class Product2Component {
    product:Product;
    title:String = 'Компонент называется: ProductComponent2';

    constructor(private productService:ProductService) {
        this.product = productService.getProduct();
    }
}