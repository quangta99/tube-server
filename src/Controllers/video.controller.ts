import { Request, Response } from 'express'

import { getPlayListItems } from '../Services/youtube.service'
import { Video } from '../Models/video.model'
import { removeAccents } from '../Utils'

export const importVideoByPlayListId = async(req: Request, res: Response) : Promise<Response> => {
    const {id} = req.params
    try {
        const result = await getPlayListItems(id)
        await  Video.insertMany(result) 
        return res.status(200).send('Imported Video Successful!')
    }
    catch(e) {
        console.log('e :>> ', e);
        return res.status(500).send("Internal Server Error!")
    }
}

export const getVideos = async(req:Request, res:Response): Promise<Response>  => {
    try {
        const result = await Video.find({})
        return res.status(200).send(result)
    }   
    catch(e) {
        console.log('e :>> ', e);
        return res.status(500).send("Internal Server Error!")
    }
}

export const getVideosByPlayListId = async(req:Request, res:Response): Promise<Response>  => {
    const {id} = req.params
    try {
        const result = await Video.find({"playlistId": id})
        return res.status(200).send(result)
    }   
    catch(e) {
        console.log('e :>> ', e);
        return res.status(500).send("Internal Server Error!")
    }
}

export const getVideosById = async(req:Request, res:Response): Promise<Response>  => {
    const {id} = req.params
    try {
        const result = await Video.findOne({"id": id})
        return res.status(200).send(result)
    }   
    catch(e) {
        console.log('e :>> ', e);
        return res.status(500).send("Internal Server Error!")
    }
}

export const searchVideos = async(req:Request, res:Response): Promise<Response>  => {
    const {key} = req.params
    let result: any[] = []
    try {
        // const result = await Video.find({"title" : {'$regex' : `.*${key}.*`,'$options':'i'}});
        const list = await Video.find()
        result =  list.filter(item =>
             removeAccents(item.title).toLocaleLowerCase().includes(removeAccents(key).toLocaleLowerCase()))
        return res.status(200).send(result)
    }   
    catch(e) {
        console.log('e :>> ', e);
        return res.status(500).send("Internal Server Error!")
    }
}
