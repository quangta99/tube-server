import axios from "axios"
require('dotenv').config()

const key = process.env.API_KEY

export const getPlayListItems = async(id: string) => {
    const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems`,{
        params: {
            part: 'snippet,contentDetails',
            key: key,
            playlistId: id,
            maxResults: 15
        }
    }).then(res => res.data).catch(e => {
        console.log('e :>> ', e);
    })
    const result = res.items.map((item: any) => {
        return {
            id: item.id,
            videoId: item.snippet.resourceId.videoId,
            playlistId: item.snippet.playlistId,
            title: item.snippet.title,
            channelTitle: item.snippet.channelTitle,
            publishedAt: item.snippet.publishedAt,
            description: item.snippet.description,
            thumbnails: item.snippet.thumbnails,
        }
    })
    return result
}

export const getPlayList= async(id: string) => {
    const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlists`,{
        params: {
            part: 'snippet,contentDetails',
            key: key,
            channelId: id,
            maxResults: 10
        }
    }).then(res => res.data).catch(e => {
        console.log('e :>> ', e);
    })
    const result = res.items.map((item: any) => {
        return {
            id: item.id,
            title: item.snippet.title,
            description: item.snippet.description
        }
    })
    return result
}