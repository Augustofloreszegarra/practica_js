class Product {
  constructor ( id, title, price, stock, images, onsale, supplier, colors, descriptionCort, descriptionLarge, discount, igv ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;
    this.colors = colors;
    this.descriptionCort = descriptionCort;
    this.descriptionLarge = descriptionLarge;
    this.discount = discount;
    this.igv = igv;
  }
}

const prod1 = new Product(
  1,
  "Producto 1",
  100,
  20,
  [ "mock1.jpg", "mock2.jpg", "mock1.jpg", "mock2.jpg", "mock1.jpg", "mock2.jpg" ],
  false,
  "Proveedor 1",
  [ "red", "green", "blue", "white" ],
  "Space Gray",
  `Experience the power of creativity with the MacBook Pro 13'4.
  Featuring 8GB of RAM and 512GB of storage, this laptop provides
  the performance and storage capacity needed for demanding tasks.
  The sleek design in silver and space gray adds a touch of
  sophistication. The high-resolution Retina display brings your
  visuals to life, whether you're editing photos, creating videos,
  or simply browsing the web. With the latest technology and a
  lightweight build, the MacBook Pro 13'4 is the perfect companion
  for professionals and creative individuals alike.`,
  20,
  0.18
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
  `Experience the power of creativity with the MacBook Pro 13'4.
  Featuring 8GB of RAM and 512GB of storage, this laptop provides
  the performance and storage capacity needed for demanding tasks.
  The sleek design in silver and space gray adds a touch of
  sophistication. The high-resolution Retina display brings your
  visuals to life, whether you're editing photos, creating videos,
  or simply browsing the web. With the latest technology and a
  lightweight build, the MacBook Pro 13'4 is the perfect companion
  for professionals and creative individuals alike.`,
  20,
  0.18
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
  `Experience the power of creativity with the MacBook Pro 13'4.
  Featuring 8GB of RAM and 512GB of storage, this laptop provides
  the performance and storage capacity needed for demanding tasks.
  The sleek design in silver and space gray adds a touch of
  sophistication. The high-resolution Retina display brings your
  visuals to life, whether you're editing photos, creating videos,
  or simply browsing the web. With the latest technology and a
  lightweight build, the MacBook Pro 13'4 is the perfect companion
  for professionals and creative individuals alike.`,
  20,
  0.18
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
  `Experience the power of creativity with the MacBook Pro 13'4.
  Featuring 8GB of RAM and 512GB of storage, this laptop provides
  the performance and storage capacity needed for demanding tasks.
  The sleek design in silver and space gray adds a touch of
  sophistication. The high-resolution Retina display brings your
  visuals to life, whether you're editing photos, creating videos,
  or simply browsing the web. With the latest technology and a
  lightweight build, the MacBook Pro 13'4 is the perfect companion
  for professionals and creative individuals alike.`,
  20,
  0.18
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
  `Experience the power of creativity with the MacBook Pro 13'4.
  Featuring 8GB of RAM and 512GB of storage, this laptop provides
  the performance and storage capacity needed for demanding tasks.
  The sleek design in silver and space gray adds a touch of
  sophistication. The high-resolution Retina display brings your
  visuals to life, whether you're editing photos, creating videos,
  or simply browsing the web. With the latest technology and a
  lightweight build, the MacBook Pro 13'4 is the perfect companion
  for professionals and creative individuals alike.`,
  20,
  0.18
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
  `Experience the power of creativity with the MacBook Pro 13'4.
  Featuring 8GB of RAM and 512GB of storage, this laptop provides
  the performance and storage capacity needed for demanding tasks.
  The sleek design in silver and space gray adds a touch of
  sophistication. The high-resolution Retina display brings your
  visuals to life, whether you're editing photos, creating videos,
  or simply browsing the web. With the latest technology and a
  lightweight build, the MacBook Pro 13'4 is the perfect companion
  for professionals and creative individuals alike.`,
  20,
  0.18
);

const products = [ prod1, prod2, prod3, prod4, prod5, prod6 ];
