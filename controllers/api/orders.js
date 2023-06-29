const Order = require('../../models/order');
// const Item = require('../../models/item');

module.exports = {
  cart,
  addToCart
};


async function cart(req, res) {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
  }

async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    console.log("this is add to cart", cart);
    res.json(cart);
}