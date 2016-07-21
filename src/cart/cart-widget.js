import {CartService} from 'cart/cart-service.js';
import {inject} from 'aurelia-framework';

@inject(CartService)
export class CartWidget{

	constructor(cartService){
		this.cartService = cartService;
	}

	get count(){
    return this.cartService.count;
	}

}