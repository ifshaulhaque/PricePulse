import express from "express";
import {controller} from "./controller.js";

const route = express.Router();

/**
 * @swagger
 * /user:
 *  post:
 *      summary: save a new user
 *      tags:
 *          - user
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status: 
 *                                  type: integer
 *                                  example: 200
 *                              data:
 *                                  type: object
 *                                  $ref: '#/components/schemas/UserResponse'
 *          400:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref : '#/components/schemas/FailResponse'
 */
route.post("/user", controller.save)

/**
 * @swagger
 * /user:
 *  put:
 *      summary: update user
 *      tags:
 *          - user
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status: 
 *                                  type: integer
 *                                  example: 200
 *                              data:
 *                                  type: object
 *                                  $ref: '#/components/schemas/UserResponse'
 *          400:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref : '#/components/schemas/FailResponse'
 */
route.put("/user", controller.update)

export default route