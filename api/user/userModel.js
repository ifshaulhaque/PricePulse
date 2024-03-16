import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *  schemas: 
 *      UserResponse:
 *          type: object
 *          properties:
 *              _id: 
 *                  type: mongoId
 *              email:
 *                  type: string
 *              password:
 *                  type: string
 *              emailVerified:
 *                  type: boolean
 *              isAnonymous:
 *                  type: boolean
 *              providerData:
 *                  type: object
 *              stsTokenManager:
 *                  type: object
 *                  properties:
 *                      refreshToken:
 *                          type: string
 *                      accessToken:
 *                          type: string
 *                      expirationTime:
 *                          type: number
 *              createAt:
 *                  type: date
 *              updateAt:
 *                  type: date                 
 */

/**
 * @swagger
 * components:
 *  schemas: 
 *      User:
 *          type: object
 *          properties:
 *              email:
 *                  type: string
 *              password:
 *                  type: string
 *              emailVerified:
 *                  type: boolean
 *              isAnonymous:
 *                  type: boolean
 *              providerData:
 *                  type: object
 *              stsTokenManager:
 *                  type: object
 *                  properties:
 *                      refreshToken:
 *                          type: string
 *                      accessToken:
 *                          type: string
 *                      expirationTime:
 *                          type: number              
 */

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
}, {
  timestamps: true
});

export default mongoose.model("user", schema);