import mongoose from 'mongoose'


interface IThumb {
    default: IPicture
    medium: IPicture
    high: IPicture
    standard: IPicture
    maxres: IPicture
}

interface IPicture {
    url: string
    width: number
    height: number
}

interface VideoDoc extends mongoose.Document {
    id: string 
    videoId: string
    playlistId: string
    title: string 
    channelTitle: string 
    publishedAt: string 
    description: string 
    thumbnails: IThumb 
}

const videoSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    videoId: {
        type: String,
        required: true
    },
    playlistId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    channelTitle: {
        type: String,
        required: true
    },
    publishedAt: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    thumbnails: {
        type: Object,
        require: true
    }
}, {collection: 'videos'})

const Video = mongoose.model<VideoDoc>('Video', videoSchema)

export {Video}


