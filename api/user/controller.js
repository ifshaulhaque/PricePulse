import User from "./userModel.js";
import Bcrypt from "bcrypt";
import mongoose from "mongoose";
import { success, fail } from "../responseModel.js";

export const controller = {
    save: (req, res) => {
        req.body.password = Bcrypt.hashSync(req.body.password, 10);
        var date = new Date();
        var user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: req.body.password,
            emailVerified: req.body.emailVerified,
            isAnonymous: req.body.isAnonymous,
            providerData: req.body.providerData,
            stsTokenManager: req.body.stsTokenManager,
        })

        user.save()
            .then((result) => {
                res.status(201).json(success(201, result));
            })
            .catch((error) => {
                res.status(400).json(fail(400, error));
            })
    },

    update: (req, res) => {
        var user = req.body
        if (req.body.password != null) {
            var password = Bcrypt.hashSync(req.body.password, 10);
            user.password = password;
        }

        User.updateOne(
            { email: req.body.email },
            { $set: user })
            .then((result) => {
                res.status(201).json(success(201, user));
            })
            .catch((error) => {
                res.status(400).json(fail(400, error));
            })
    }
}