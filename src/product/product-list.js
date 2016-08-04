import {CartService} from 'cart/cart-service.js';
import {inject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';

@inject(CartService)
export class ProductList{
	@bindable products = [];

	constructor(cartService){
		this.cartService = cartService;
	}

	addToCart(product){
		this.cartService.addItem(product);
	}
}