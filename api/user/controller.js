import User from "./userModel.js";
import Bcrypt from "bcrypt";

export const controller = {
    save: (req, res) => {
        req.body.password = Bcrypt.hashSync(req.body.password, 10);
        var user = new User({
            _id: req.body.uid,
            email: req.body.email,
            password: req.body.password,
            emailVerified: req.body.emailVerified,
            isAnonymous: req.body.isAnonymous,
            providerData: req.body.providerData,
            stsTokenManager: req.body.stsTokenManager,
            metadata: req.body.metadata,
        })

        user.save()
            .then((result) => {
                res.status(201).json(result);
            })
            .catch((error) => {
                res.status(400).json(error);
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
                res.status(201).json(user);
            })
            .catch((error) => {
                res.status(400).json(error);
            })
    }
}