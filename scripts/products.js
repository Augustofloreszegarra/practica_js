class Product {
  constructor ( id, title, price, stock, images, onsale, supplier, colors, description, discount ) {
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

const prod1 = new Product(
  1,
  "Producto 1",
  100,
  20,
  [ "mock1.jpg", "mock2.jpg" ],
  false,
  "Proveedor 1",
  [ "red", "green", "blue" ],
  "Space Gray",
  10
);

const prod2 = new Product(
  2,
  "Producto 2",
  200,
  10,
  [ "mock1.jpg", "mock2.jpg" ],
  true,
  "Proveedor 2",
  [ "black", "white" ],
  "Space Gray",
  20
);

const prod3 = new Product(
  3,
  "Producto 3",
  300,
  30,
  [ "mock1.jpg", "mock2.jpg" ],
  true,
  "Proveedor 3",
  [ "yellow", "blue" ],
  "Space Gray",
  30
);

const prod4 = new Product(
  4,
  "Producto 4",
  400,
  40,
  [ "mock1.jpg", "mock2.jpg" ],
  false,
  "Proveedor 4",
  [ "black", "white" ],
  "Space Gray",
  40
);

const prod5 = new Product(
  5,
  "Producto 5",
  500,
  50,
  [ "mock1.jpg", "mock2.jpg" ],
  false,
  "Proveedor 5",
  [ "red", "green" ],
  "Space Gray",
  50
);
const prod6 = new Product(
  6,
  "Producto 6",
  500,
  50,
  [ "mock1.jpg", "mock2.jpg" ],
  false,
  "Proveedor 6",
  [ "red", "green" ],
  "Space Gray",
  50
);

const products = [ prod1, prod2, prod3, prod4, prod5, prod6 ];
