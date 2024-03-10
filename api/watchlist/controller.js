import WatchList from './watchlistModel.js';
import { success, fail } from "../responseModel.js";

export const controller = {
    getAllTheWatchList: (req, res) => {
        WatchList.find({email: req.body.email}, {email: 1, watchlist: 1}).then((data) => {
            res.status(200).json(success(200, data));
        }).catch((err) => {
            res.status(400).json(fail(400, err));
        })
    },

    setWatchList: (req, res) => {
        WatchList.updateOne(
            {email: req.body.email},
            {$push: {watchlist: req.body.stock}},
            {upsert: true} 
        ).then((data) => {
            res.status(200).json(success(200, data));
        }).catch((err) => {
            res.status(400).json(fail(400, err));
        })
    },

    removeFromWatchList: (req, res) => {
        WatchList.updateOne(
            {email: req.body.email},
            {$pull: {watchlist: req.body.stock}},
            {upsert: true} 
        ).then((data) => {
            res.status(200).json(success(200, data));
        }).catch((err) => {
            res.status(400).json(fail(400, err));
        })
    }
}