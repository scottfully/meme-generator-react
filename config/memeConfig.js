export const DEFAULT_MEME = {
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg"
}

export const API_CONFIG = {
    memeApiUrl: "https://api.imgflip.com/get_memes"
}

export const DOWNLOAD_CONFIG = {
    defaultFilename: "meme",
    fileFormat: "jpg",
    memeImageId: "memeToDownload",
    canvasOptions: {
        useCORS: true,
        allowTaint: true,
        scale: 1
    }
}
