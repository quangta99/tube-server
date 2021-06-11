import mongoose from 'mongoose';

interface PlaylistsDoc extends mongoose.Document {
    id: string,
    title: string,
    description: string
}

const playlistsSchema = new mongoose.Schema ({
    id:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, {collection: 'playlists'})

const Playlits = mongoose.model<PlaylistsDoc>('Playlists', playlistsSchema)

export {Playlits}