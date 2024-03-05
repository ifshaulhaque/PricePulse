import mongoose from "mongoose";

var schema = mongoose.Schema({
    _id: {
      type: mongoose.Types.ObjectId
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    emailVerified: {
      type: Boolean
    },
    isAnonymous: {
      type: Boolean
    },
    providerData: {
      type: Object
    },
    stsTokenManager: {
      refreshToken: {
        type: String
      },
      accessToken: {
        type: String
      },
      expirationTime: {
        type: Number
      }
    }
  },{
    timestamps: true
  });

  export default mongoose.model("user", schema);