export class App {

  configureRouter(config, router) {
    config.title = 'Store Name';
    config.map([
      { route: ['', 'home'], name: 'home',      moduleId: 'home/home',      nav: true, title: 'Home' },
      { route: ['products'], 		name: 'product-list',     moduleId: 'product/product-list',     nav: true, title: 'Products' },
      { route: ['products/:id'], 		name: 'product-details',     moduleId: 'product/product-details',     nav: false, title: 'Product Details' },
      { route: ['cart'], 		name: 'cart',     moduleId: 'cart/cart',     nav: false, title: 'Cart' }
    ]);

    this.router = router;
  }
}
