import mongoose from "mongoose";

var schema = mongoose.Schema({
    email: {type: String},
    watchlist: {type: Array}
});

export default mongoose.model("watchlists", schema);