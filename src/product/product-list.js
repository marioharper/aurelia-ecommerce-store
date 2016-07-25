import {ProductService} from 'product/product-service.js';
import {CartService} from 'cart/cart-service.js';
import {inject} from 'aurelia-framework';


@inject(ProductService, CartService)
export class ProductList{

	constructor(productService, cartService){
		this.productsService = productService;
		this.cartService = cartService;
		this.products = productService.getProducts();
	}

	addToCart(product){
		this.cartService.addItem(product);
	}
}