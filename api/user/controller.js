import User from "./userModel.js";

export const controller = {
    save: (req, res) => {
        var user = new User({
            _id: req.body.uid,
            email: req.body.email,
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
        var user = {
            _id: req.body.uid,
            email: req.body.email,
            emailVerified: req.body.emailVerified,
            isAnonymous: req.body.isAnonymous,
            providerData: req.body.providerData,
            stsTokenManager: req.body.stsTokenManager,
            metadata: req.body.metadata,
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