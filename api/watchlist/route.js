import express from 'express';
import { controller } from './controller.js';

let route = express.Router();

route.get('/watchlist', controller.getAllTheWatchList);
route.post('/watchlist', controller.setWatchList);
route.delete('/watchlist', controller.removeFromWatchList);

export default route;