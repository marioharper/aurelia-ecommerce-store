import {ProductService} from 'product/product-service.js';
import {inject} from 'aurelia-framework';

@inject(ProductService)
export class Home{
	
	constructor(productService){
		this.productsService = productService;
		this.featuredProducts = productService.getProducts();
	}

}
