import {Http} from '@angular/http';
import {Injectable} from '@angular/core';


export class Product {
    constructor(public title:string, public price:number, public subTitle:string, public description:string) {
    }
}

export class ProductService {
    getProduct():Product {
        return new Product('iPhone 7', 500, 'product 1', 'реальный сервер')
    }
}


export class MockProductService implements ProductService {

    getProduct():Product {
        return new Product('Samsung Galaxy A5', 4500, 'product 1', 'это тестовые данные');
    }
}