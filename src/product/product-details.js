import {ProductService} from 'product/product-service.js';
import {CartService} from 'cart/cart-service.js';

import {inject} from 'aurelia-framework';

@inject(ProductService, CartService)
export class ProductDetails{

	constructor(productService, cartService){
		this.productService = productService;
		this.cartService = cartService;
		this.product = productService.getProduct(this.id);
	}

	activate(params){
		this.product = this.productService.getProduct(params.id);
	}

	addToCart(){
		this.cartService.addItem(this.product);
	}
}