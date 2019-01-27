import { videos } from "../db";
import routes from "../routes";

export const home = (req, res) => {

    res.render("home", { pageTitle: "Home", videos });
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

export const postUpload = (req, res) => {
    const { 
        body : { file, title, description }
    } = req;
    // To Do : Upload and Save Video
    res.redirect(routes.videoDetail(5555555))
}

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle : "video Detail"});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle : "edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle : "delete Video"});