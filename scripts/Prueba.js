class Product {
  constructor (
    id,
    title,
    price,
    stock,
    images,
    onsale,
    supplier,
    colors,
    description,
    discount
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;
    this.colors = colors;
    this.description = description;
    this.discount = discount;
  }
}

const product1 = new Product( 1, 'Product 1', 100, 0, [ 'img1.jpg', 'img2.jpg' ], 'Description of product 1', [ 'red', 'blue' ], 0.1 );

console.log( "producto1", product1 );