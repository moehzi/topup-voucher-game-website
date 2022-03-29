const Voucher = require('./model');
const Category = require('../category/model');
const Nominal = require('../nominal/model');

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash('alertMessage');
      const alertStatus = req.flash('alertStatus');

      const alert = { message: alertMessage, status: alertStatus };
      const voucher = await Voucher.find();

      console.log(alert);
      res.render('admin/voucher/view_voucher', { voucher, alert });
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/voucher');
    }
  },

  viewCreate: async (req, res) => {
    try {
      const category = await Category.find();
      const nominal = await Nominal.find();

      res.render('admin/voucher/create', { category, nominal });
    } catch (error) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/voucher');
    }
  },
};
