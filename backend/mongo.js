import { mongodbURI } from "./config.js";
import mongoose from "mongoose";
import express from "express";

export function initConnection(){
    mongoose.connect(mongodbURI).
    catch(error => console.log(error));
    console.log("lo stato è "+mongoose.connection.readyState);
}
const schema = new mongoose.Schema({
    timestamp: Date,
    hum: Number,
    value: Number,
    free_ram: Number,
    total_ram: Number,
    sensorCode: String,
    name: String
});
export const datalogs = mongoose.model('datalogs', schema);
export async function collectData(entityToCreate){
    entityToCreate.name="Fabio Bonardi";
    await datalogs.create(entityToCreate);
}
export async function findAllMyData(){
    return await datalogs.find({name:"Fabio Bonardi"})
}
export async function pulisci(){
    await datalogs.deleteMany({name:"Fabio Bonardi"})
}