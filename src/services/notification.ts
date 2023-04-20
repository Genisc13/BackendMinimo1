import { Notification } from "../interfaces/notification.interface";
import NotificationModel from "../models/notification";

const insertNotification = async(item: Notification) => {
    const responseInsert = await NotificationModel.create(item);
    return responseInsert;
};

const getNotifications = async() => {
    const responseItem = await NotificationModel.find({});
    return responseItem;
};

const getNotification = async(id: string) => {
    const responseItem = await NotificationModel.findOne({_id: id});
    return responseItem;
};

const updateNotification = async(id: string, data: Notification) => {
    const responseItem = await NotificationModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};

const deleteNotification = async(id: string) => {
    const responseItem = await NotificationModel.findOneAndRemove({_id: id});
    return responseItem;
}


export {insertNotification, getNotification, getNotifications, updateNotification, deleteNotification};
