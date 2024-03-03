import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebase } from "../../db/firebase.js";
import User from "./userModel.js";

const auth = getAuth(firebase.getFirebaseApp());

export const controller = {
    createUserWithEmailAndPassword: (req, res) => {
        let email = req.body.email;
        let password = req.body.password;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                var user = new User({
                    _id: userCredential.user.uid,
                    email: userCredential.user.email,
                    emailVerified: userCredential.user.emailVerified,
                    isAnonymous: userCredential.user.isAnonymous,
                    providerData: userCredential.user.providerData,
                    stsTokenManager: userCredential.user.stsTokenManager,
                    metadata: userCredential.user.metadata,
                })

                user.save()
                    .then((result) => {
                        res.json(result);
                    })
                    .catch((error) => {
                        res.json(error);
                    })
            })
            .catch((error) => {
                res.json(error);
            });
    }
}