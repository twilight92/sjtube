import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "videos/" }); //dest - destination

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'Sjtube';
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated:true,
        id:1
    }
    next();
};

export const uploadVideo = multerVideo.single("videoFile"); //single - 오직 하나의 파일만 Upload할 수 있는 것을 의미, Name part는 upload.pug의 file name에 들어올 파일의 Name