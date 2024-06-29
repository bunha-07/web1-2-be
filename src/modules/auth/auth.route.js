import { Router } from 'express';
import { forgotPassword, signin, signup, update } from './auth.controller.js';

const authRoute = Router();

// đăng nhập
authRoute.post('/signin', signin);

// đăng kí
authRoute.post('/signup', signup);

//cập nhật
authRoute.put('/update/:id', update);

authRoute.put('/forgotPassword', forgotPassword);
export { authRoute };