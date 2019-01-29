// import { videos } from "../db";
import routes from "../routes";
import Video from "../models/Video"; //Database의 element가 아니라 이건 단지 model, element를 받는 통로일 뿐이지 element자체는 아니다.

export const home = async(req, res) => {
    try {
        const videos = await Video.find({});
            res.render("home", { pageTitle: "Home", videos });
            console.log(videos)
        } catch(error) {
            console.log(error)
            res.render("home", { pageTitle: "Home", videos : [] });
    }
    
}

export const search = (req, res) => {
    //const searchingBy = req.query.term;
    const { 
        query: { term: searchingBy }
    } = req;

    // res.render("search", { pageTitle: "search", searchingBy: searchingBy});
    res.render("search", { pageTitle: "search", searchingBy, videos });
}

export const getUpload = (req, res) => res.render("upload", {pageTitle : "upload"});

export const postUpload = async (req, res) => {
    const { body: { title, description }, file: { path } } = req;
    //file 방식이 아닌 URL 방식으로
    const newVideo = await Video.create(
    {
        fileUrl: path,
        title,
        description
    }
    );
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id))
}

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle : "video Detail"});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle : "edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle : "delete Video"});