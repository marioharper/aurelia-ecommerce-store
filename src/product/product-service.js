import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class ProductService{

	constructor(http){
		this.products = [];

		//until api works
		http.configure(config => {
            config
              .useStandardConfiguration()
              .withBaseUrl('http://private-7a928-volusion.apiary-mock.com/api/v1/products');
        });
 
      this.http = http;
      this.http.fetch("")
         .then(response => response.json())
         .then(data => {
            this.products.push(data.data);
            this.products.push(data.data);
            this.products.push(data.data);
            this.products.push(data.data);
         });
	}

	getProducts(){
		return this.products;
	}

	getProduct(id){
		for(let product of this.products){
			if(product.id == id) return product;
		}
	}
}