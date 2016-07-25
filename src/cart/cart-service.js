
export class CartItem {
  constructor(product, qty) {
    this.product = product;
    this.qty = parseInt(qty);
  }
}


import {inject} from 'aurelia-framework';
import {computedFrom} from 'aurelia-framework';

import {NotificationService} from 'notification/notification-service.js';
import 'fetch';

@inject(NotificationService)
export class CartService{

	constructor(notificationService){
      this.notificationService = notificationService;

      this._items = []; // hit api?
	}

   @computedFrom('_items')
   get total(){
      let total = 0;

      for(let item of this._items){
         total += item.product.pricing.regularPrice * item.qty;
      }

      return total;
   }

   @computedFrom('_items')
   get items(){
      return this._items;
   }
   
   @computedFrom('_items')
   get count(){
       let count = 0;

       for(let item of this._items){
          count += parseInt(item.qty);
       }

       return count;
   }

   addItem(product){
      let item = this._getItemByProductId(product.id);

      if(item){ // if already in the cart
         item.qty = item.qty + 1;
      }else{ // not yet in the cart
         // get from products
         this._items.push(new CartItem(product, 1));
      }
   }

   removeItem(productId){
      let item = this._getItemByProductId(productId);

      if(item){ 
         let idx = this._getItemIndex(productId);

         this._items.splice(idx, 1);
      }  
   }

   updateItemQty(productId, count){
      let item = this._getItemByProductId(productId);

      if(item){ 
         item.qty = count;
      } 
   }

   _getItemByProductId(productId){

      for(let item of this._items){
         if(item.product.id === productId){
            return item;
         }
      }

      return null;
   }

   _getItemIndex(productId){
      for(let i = 0, x = this._items.length; i < x; i++){
         if(this._items[i].product.id === productId){
            return i;
         }
      }

      return -1;
   }

}