import {ProductService} from 'product/product-service.js';
import {CartService} from 'cart/cart-service.js';
import {NotificationService} from 'notification/notification-service.js';

import {inject} from 'aurelia-framework';

@inject(ProductService, CartService, NotificationService)
export class ProductDetails{

	constructor(productService, cartService, notificationService){
		this.productService = productService;
		this.cartService = cartService;
		this.notificationService = notificationService;

		this.relatedProducts = productService.getProducts();
		this.selectedOptions = {};
	}

	attached(){
	  getmdlSelect.init('.getmdl-select');
    componentHandler.upgradeDom();
  }

  get image(){
  	
  	for(var i = 0; i < this.product.imageCollections.length; i++){
  		if(this.product.imageCollections[i].key == this.selectedOptions.color){
  			return this.product.imageCollections[i].images[0].medium;
  		}
  	}

  }

	activate(params){
		this.product = this.productService.getProduct(params.id);
		for(var i = 0; i < this.product.options.length; i++){
			this.selectedOptions[this.product.options[i].key] = null;
		}
		console.log(JSON.stringify(this.selectedOptions));
	}

	addToCart(){
		this.cartService.addItem(this.product);

		var options = "";

		for(var key in this.selectedOptions){
			// skip loop if the property is from prototype
	    if (!this.selectedOptions.hasOwnProperty(key)) continue;
			
      options += key + ": " + this.selectedOptions[key] + " ";

		}

		this.notificationService.notify(`Added a ` + this.product.name + ` to your cart with the following options: ` + options);
	}

}