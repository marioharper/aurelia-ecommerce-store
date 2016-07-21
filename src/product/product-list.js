import {ProductService} from 'product/product-service.js';
import {inject} from 'aurelia-framework';

@inject(ProductService)
export class ProductList{
	productsService = "";
	products = "";

	constructor(productService){
		this.productsService = productService;
		this.products = productService.getProducts();
	}
}