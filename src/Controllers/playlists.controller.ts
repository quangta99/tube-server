import { Request, Response } from 'express'

import { getPlayList } from '../Services/youtube.service'
import { Playlits } from '../Models/playlist.model'

export const importPlaylistByChannelId = async(req: Request, res: Response): Promise<Response> => {
    const {id} = req.params
    try {
        const result = await getPlayList(id)
        await  Playlits.insertMany(result) 
        return res.status(200).send('Imported PlayLists Successful!')
    }
    catch(e) {
        console.log('e :>> ', e);
        return res.status(500).send("Internal Server Error!")
    }
}

export const getPlaylists = async(req:Request, res:Response): Promise<Response>  => {
    try {
        const result = await Playlits.find({})
        return res.status(200).send(result)
    }   
    catch(e) {
        console.log('e :>> ', e);
        return res.status(500).send("Internal Server Error!")
    }
}
