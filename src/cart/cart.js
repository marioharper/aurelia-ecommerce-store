import {inject} from 'aurelia-framework';

import {CartService} from 'cart/cart-service.js';

@inject(CartService)
export class Cart{


	constructor(cartService){
		this.cartService = cartService;
		this.itemsSelected = false;
	}

  attached(){
    componentHandler.upgradeDom();
    var checkboxes = document.getElementById('cart-table').querySelectorAll('.mdl-checkbox__input');
	  var self = this;
	  for (var i = 0; i < checkboxes.length; i++) {
	    checkboxes[i].addEventListener('change', function(){
	    	if(self.getItemsToDelete().length > 0){
	    		self.itemsSelected = true;
	    	}else{
	    		self.itemsSelected = false;
	    	}
	    });
	  }
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

	deleteSelected(){
		// get items to delete
		var selected = this.getItemsToDelete();

		for(var i = 0, x = selected.length; i < x; i++){
			this.remove(selected.data('product-id'));
		}
	}

	getItemsToDelete(){
		return $('table tr.is-selected');
	}

	remove(productId){
		this.cartService.removeItem(productId);
	}

	updateItemQty(productId, event){
		let newCount = parseInt(event.target.value);
		this.cartService.updateItemQty(productId, newCount);
	}

}