import express from "express";
import { PageController } from "../controllers/page";
import viewsChecking from "../middlewares/uuid";

const router = express.Router();

router.get('/list/question', PageController.getQuestionListPage);

router.get('/detail/question', viewsChecking, PageController.getQuestionDetailPage);

// router.delete('/delete', authticate_JWT, s3.s3DeletePhoto, QuestionController.deleteQuestion)

// router.post('/uploads', authticate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), QuestionController.uploadQuestion)

// router.patch('/update', authticate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), QuestionController.updateQuestion)

// 채택하기 api 추가 필요

export default router;