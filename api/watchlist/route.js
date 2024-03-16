import express from 'express';
import { controller } from './controller.js';

let route = express.Router();

/**
 * @swagger
 * /watchlist/{email}:
 *  get:
 *      summary: getting all the watchlist for the user
 *      tags:
 *          - watchlist
 *      parameters:
 *        - in: path
 *          name: email
 *          required: true
 *          schema:
 *              type: string
 *              example: example@gmail.com
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
 *                                  $ref: '#/components/schemas/WatchList'
 *          400:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref : '#/components/schemas/FailResponse'    
 *                         
 */
route.get('/watchlist/:email', controller.getAllTheWatchList);

/**
 * @swagger
 * /watchlist:
 *  post:
 *      summary: add stock to watchlist for a user
 *      tags:
 *          - watchlist
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              example: example@gmail.com
 *                          stock:
 *                              type: string
 *                              example: BSE_FO|859970  
 *      responses:
 *          200:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref : '#/components/schemas/SuccessResponse' 
 *          400:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref : '#/components/schemas/FailResponse'         
 */
route.post('/watchlist', controller.setWatchList);

/**
 * @swagger
 * /watchlist:
 *  delete:
 *      summary: remove stock to watchlist for a user
 *      tags:
 *          - watchlist
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              example: example@gmail.com
 *                          stock:
 *                              type: string
 *                              example: BSE_FO|859970  
 *      responses:
 *          200:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref : '#/components/schemas/SuccessResponse' 
 *          400:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref : '#/components/schemas/FailResponse'         
 */
route.delete('/watchlist', controller.removeFromWatchList);

export default route;