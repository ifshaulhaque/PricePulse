import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *  schemas:
 *      WatchList: 
 *          type: object
 *          properties:
 *              _id: 
 *                  type: mongoId
 *              email:
 *                  type: string
 *                  example: example@gmail.com
 *              watchlist:
 *                  type: array
 *                  items:
 *                      type: string
 */
var schema = mongoose.Schema({
    email: {type: String},
    watchlist: {type: Array}
});

export default mongoose.model("watchlists", schema);