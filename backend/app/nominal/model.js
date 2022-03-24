const mongoose = require('mongoose');
let nominalSchema = mongoose.Schema({
  coinQuantity: {
    type: Number,
    require: [true, 'Nama kateogri harus diisi'],
    default: 0,
  },
  coinName: {
    type: String,
    require: [true, 'Nama koin harus diisi'],
  },
  price: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Nominal', nominalSchema);
