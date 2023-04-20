import { Request,Response } from "express";
import { insertNotification, getNotification, getNotifications, updateNotification, deleteNotification} from "../services/notification";
import { handleHttp } from "../utils/error.handle";

const getAviso=async({params}:Request,res:Response)=>{
    try{
        const {idNotification}=params;
        const response=await getNotification(idNotification);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_Notification");
    }
};

const getAvisos=async(req:Request,res:Response)=>{
    try{
        const response=await getNotifications();
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_Notification");
    }
};

const updateAviso=async ({params,body}:Request,res:Response)=>{
    try{
        const {idNotification}=params;
        const response=await updateNotification(idNotification,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_Notification");
    }
};

const postAviso=async ({body}:Request,res:Response)=>{
    try{
        const responsePerson=await insertNotification(body);
        res.send(responsePerson);
    }catch(e){
        handleHttp(res,"ERROR_POST_Notification");
    }
};

const deleteAviso=async ({params}:Request,res:Response)=>{
    try{
        const {idNotification}=params;
        const response=await deleteNotification(idNotification);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_USER");
    }
};

export{getAviso,getAvisos,updateAviso,postAviso,deleteAviso};