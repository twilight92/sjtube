import express from "express";
//const express = require('express');
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
//router.js에서 default로 하지 않아서

const app = express();

app.use(helmet());
app.set("view engine","pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware)

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
//use의 의미 : 누군가 /user 경로에 접속하면 이 router 전체를 사용하겠다는 의미
app.use(routes.videos, videoRouter);

export default app;
//누군가 내 파일을 불러올때(import) app object를 주겠다는 의미