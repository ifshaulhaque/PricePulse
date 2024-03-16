import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *  schemas: 
 *      Stock:
 *          type: object
 *          properties:
 *              _id: 
 *                  type: mongoId
 *              weekly:
 *                  type: boolean
 *              segment:
 *                  type: string
 *              name: 
 *                  type: string
 *              exchange: 
 *                  type: string
 *              expiry:
 *                  type: number
 *              instrument_type:
 *                  type: string
 *              underlying_symbol:
 *                  type: string
 *              instrument_key:
 *                  type: string
 *              lot_size:
 *                  type: number
 *              freeze_quantity:
 *                  type: number
 *              exchange_token:
 *                  type: date
 *              minimum_lot:
 *                  type: number
 *              underlying_key:
 *                  type: string
 *              tick_size:
 *                  type: number
 *              underlying_type:
 *                  type: string
 *              trading_symbol:
 *                  type: string
 *              strike_price:
 *                  type: number
 */

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