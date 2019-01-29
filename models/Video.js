import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required" //required가 충족되지 못하면 error message, fileUrl 값이 없는 Video를 생성하려 한다면 이 error message를 받는다
  },
  title: {
    type : String,
    required : "Title is required"
  },
  description : String,
  views : {
      type : Number,
      default : 0
  },
  createdAt : {
      type : Date,
      default : Date.now //현재 날짜를 반환하는 function, Data now 자체는 function 이고 Data.now()는 그 함수를 실행해서 현재 날짜를 반환하는 것
                        //document를 저장할 때마다 해당 function을 실행해서 현재 날짜를 받는다
  },
  comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
  }]
});

const model = mongoose.model("Video", VideoSchema);
export default model;