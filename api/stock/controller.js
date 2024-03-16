import Stock from "./stockModel.js";
import { success, fail } from "../responseModel.js";

export const controller = {
    search: (req, res) => {
        let query = {
            name: {$regex: req.body.name ?? ""},
            exchange: {$regex: req.body.exchange ?? ""}
        }

        let options = {
            limit: req.body.limit ?? 10,
            skip: req.body.skip ?? 0
        }

        Stock.find(query, null, options).then((data) => {
            if (data.length > 0) {
                res.status(200).json(success(200, data));
            } else {
                res.status(404).json(fail(404, "No matching data found"));
            }
        }).catch((err) => {
            res.status(400).json(fail(400, err));
        })
    },

    getAllStockName: (req, res) => {
        Stock.find().distinct('name').then((data) => {
            res.status(200).json(success(200, data));
        }).catch((err) => {
            res.status(200).json(fail(400, err));
        });
    },

    getAutoComplete: (req, res) => {
        let query = {
            name: {$regex: '^'+req.params.stockName, $options: 'i'}
        }

        Stock.find(query).distinct('name').then((data) => {
            res.status(200).json(success(200, data));
        }).catch((err) => {
            res.status(200).json(fail(400, err));
        });
    }
}