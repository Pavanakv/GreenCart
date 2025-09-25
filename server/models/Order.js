import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {type: String, reuired: true, ref: 'user'}, 
    items: [{
        product: {type: String, reuired: true, ref: 'product'},
        quantity: {type: Number, reuired: true}
    }],
    amount: {type: Number, reuired: true},
    address: {type: String, reuired: true, ref: 'address'},
    status: {type: String, default: 'Order Placed'},
    paymentType: {type: String, reuired: true},
    isPaid: {type: Boolean, reuired: true, default: false},
},{timestamps: true })

const Order = mongoose.models.order || mongoose.model('order', orderSchema)

export default Order