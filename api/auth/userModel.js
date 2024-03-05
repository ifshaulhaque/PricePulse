import mongoose from "mongoose";

var schema = mongoose.Schema({
    _id: {
      type: String
    },
    email: {
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
    },
    metadata: {
      type: Object
    },
  });

  export default mongoose.model("auth", schema);