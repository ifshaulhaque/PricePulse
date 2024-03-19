import express from "express";
import { controller } from "./controller.js";

const route = express.Router();

/**
 * @swagger
 * /stock:
 *  post:
 *      summary: search for a stock
 *      tags:
 *          - stock
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties: 
 *                          name:
 *                              type: string
 *                              example: GTL INFRA
 *                          exchange:
 *                              type: string
 *                              example: NSE
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
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      $ref: '#/components/schemas/Stock'
 *          400:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref : '#/components/schemas/FailResponse'
 *                          
 */
route.post("/stock", controller.search);

/**
 * @swagger
 * /stock/names:
 *  get:
 *      summary: get all the distinct stock name
 *      tags:
 *          - stock
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
 *                                  type: array
 *                                  items:
 *                                      type: string
 *          400:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref : '#/components/schemas/FailResponse'
 */
route.get("/stock/names", controller.getAllStockName);

/**
 * @swagger
 * /stock/names/{stockName}:
 *  get:
 *      summary: get autocomplete stock name
 *      tags:
 *          - stock
 *      parameters:
 *        - in: path
 *          name: stockName
 *          required: true
 *          schema:
 *              type: string
 *              example: gtl
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
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          _id:
 *                                              type: mongoId
 *                                          name:
 *                                              type: string
 *                                          exchange:
 *                                              type: string
 *                                          instrument_key:
 *                                              type: string
 *          400:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref : '#/components/schemas/FailResponse'
 */
route.get("/stock/names/:stockName", controller.getAutoComplete);

export default route