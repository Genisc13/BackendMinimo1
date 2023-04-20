import {  Schema, Types, model, Model } from "mongoose";
import { Notification } from "../interfaces/notification.interface";


const NotificationSchema = new Schema<Notification>(
    {
        nameNotification:{
            type: String,
            required:true,
        },
        numberNotification:{
            type: Number,
            required:true,
        },
        seenNotification:{
            type: Boolean,
            required:true,
        },
        descriptionNotification:{
            type: String,
            required:false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//Once the Schema is created, it must be implemented
//1st argument ('users') is the name of the collection
//2nd argument (UserSchema) is what it feds it
const NotificationModel = model('notifications', NotificationSchema);

export default NotificationModel;