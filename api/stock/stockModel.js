import mongoose from "mongoose";

var schema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId
    },
    weekly: {
        type: Boolean
    },
    segment: {
        type: String
    },
    name: {
        type: String
    },
    exchange: {
        type: String
    },
    expiry: {
        type: Number
    },
    instrument_type: {
        type: String
    },
    underlying_symbol: {
        type: String
    },
    instrument_key: {
        type: String
    },
    lot_size: {
        type: Number
    },
    freeze_quantity: {
        type: Number
    },
    exchange_token: {
        type: Date
    },
    minimum_lot: {
        type: Number
    },
    underlying_key: {
        type: String
    },
    tick_size: {
        type: Number
    },
    underlying_type: {
        type: String
    },
    trading_symbol: {
        type: String
    },
    strike_price: {
        type: Number
    }
});

export default mongoose.model("stocks", schema);