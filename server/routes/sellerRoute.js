

import express from 'express';
import { isSellerAuth, sellerLogin, selletLogout } from '../controllers/sellerController.js';
import authSeller from '../middlewares/authSeller.js';

const sellerRouter = express.Router();

sellerRouter.post('/login', sellerLogin);
sellerRouter.get('/is-auth', authSeller, isSellerAuth);
sellerRouter.get('/logout', selletLogout);


export default sellerRouter