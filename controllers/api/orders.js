const Order = require('../../models/order');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  getAllOrders
};


async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addItemToCart(req.params.id);
  res.json(cart);
}

async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty);
  res.json(cart);
}

async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}

async function getAllOrders(req, res) {
  const orders = await Order.find({ user: req.user._id, isPaid: true }).sort({ createdAt: -1 })
  res.json(orders);
}