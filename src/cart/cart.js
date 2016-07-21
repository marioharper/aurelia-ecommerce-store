import {inject} from 'aurelia-framework';

import {CartService} from 'cart/cart-service.js';

@inject(CartService)
export class Cart{

	constructor(cartService){
		this.cartService = cartService;
	}

	get items(){
		return this.cartService.items;
	}

	get total(){
		return this.cartService.total;
	}

	get count(){
		return this.cartService.count;
	}

	remove(productId){
		this.cartService.removeItem(productId);
	}

	updateItemQty(productId, event){
		let newCount = parseInt(event.target.value);
		this.cartService.updateItemQty(productId, newCount);
	}

}