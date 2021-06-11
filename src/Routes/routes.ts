import { Router} from 'express'

import {
    getVideos,
    getVideosById,
    importVideoByPlayListId,
    searchVideos,
    getVideosByPlayListId
} from '../Controllers/video.controller'

import {
    importPlaylistByChannelId,
    getPlaylists
} from '../Controllers/playlists.controller'

const route = Router()

route.get('/import-videos/:id',importVideoByPlayListId)
route.get('/import-playlists/:id', importPlaylistByChannelId)

route.get('/playlists', getPlaylists)
route.get('/playlists/:id', getVideosByPlayListId)

route.get('/videos', getVideos)
route.get('/video/:id', getVideosById)
route.get('/search/:key', searchVideos)
export {route}