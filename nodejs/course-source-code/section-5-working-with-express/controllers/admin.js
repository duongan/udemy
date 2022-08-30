const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, price, description } = req.body;
  // const product = new Product(null, title, imageUrl, description, price);
  // // product.save();
  // product
  //   .save()
  //   .then(() => {
  //     res.redirect('/');
  //   })
  //   .catch((err) => console.log(err));
  // // res.redirect('/');
  // req.user
  //   .createProduct({
  //     title,
  //     price,
  //     imageUrl,
  //     description,
  //   })
  // Product.create({
  //   title,
  //   price,
  //   imageUrl,
  //   description,
  //   userId: req.user.id
  // })

  // const product = new Product(
  //   title,
  //   price,
  //   description,
  //   imageUrl,
  //   null,
  //   req.user._id
  // );
  const product = new Product({ title, price, description, imageUrl });
  product
    .save()
    .then((result) => {
      res.redirect('/admin/products');
    })
    .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  // Product.findById(prodId, (product) => {
  //   if (!product) {
  //     return res.redirect('/');
  //   }
  //   res.render('admin/edit-product', {
  //     pageTitle: 'Edit Product',
  //     path: '/admin/edit-product',
  //     editing: editMode,
  //     product,
  //   });
  // });
  // req.user
  // .getProducts({ where: { id: prodId } })
  // Product.findByPk(prodId)
  Product.findById(prodId)
    .then((product) => {
      // .then(([product]) => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product,
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDescription = req.body.description;

  // const updatedProduct = new Product(
  //   prodId,
  //   updatedTitle,
  //   updatedImageUrl,
  //   updatedDescription,
  //   updatedPrice
  // );
  // updatedProduct.save();

  // Product.findByPk(prodId)
  // Product.findById(prodId)
  //   .then((product) => {
  //     product.title = updatedTitle;
  //     product.price = updatedPrice;
  //     product.description = updatedDescription;
  //     product.imageUrl = updatedImageUrl;
  //     return product.save();
  //   })
  // const product = new Product(
  //   updatedTitle,
  //   updatedPrice,
  //   updatedDescription,
  //   updatedImageUrl,
  //   prodId
  // );
  Product.findById(prodId)
    .then((product) => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDescription;
      product.imageUrl = updatedImageUrl;
      return product.save();
    })
    // product
    // .save()
    .then((result) => {
      res.redirect('/admin/products');
    })
    .catch((err) => console.log(err));

  // res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  // Product.fetchAll((products) => {
  //   res.render('admin/products', {
  //     prods: products,
  //     pageTitle: 'Admin Products',
  //     path: '/admin/products',
  //   });
  // });

  // req.user
  // .getProducts()
  // Product.findAll()
  // Product.fetchAll()
  Product.find()
    .then((products) => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products',
      });
    })
    .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  // Product.deleteById(prodId);
  // Product.findByPk(prodId)
  //   .then((product) => {
  //     return product.destroy();
  //   })
  // Product.deleteById(prodId)
  Product.findByIdAndRemove(prodId)
    .then(() => {
      res.redirect('/admin/products');
    })
    .catch((err) => console.log(err));
  // res.redirect('/admin/products');
};
