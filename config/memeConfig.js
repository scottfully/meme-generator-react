export const DEFAULT_MEME = {
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    // imageUrl: "http://i.imgflip.com/1bij.jpg"
    data: {
      "id":"61579",
      "name":"One Does Not Simply",
      "url":"https:\/\/i.imgflip.com\/1bij.jpg",
      "width":568,
      "height":335,
      "box_count":2,
      "captions":477750
    }
}

export const API_CONFIG = {
    memeApiUrl: "https://api.imgflip.com/get_memes"
}

export const DOWNLOAD_CONFIG = {
    defaultFilename: "meme",
    fileFormat: "png",
    canvasOptions: {
        useCORS: true,
        allowTaint: true,
        scale: 1,
        backgroundColor: null,
        logging: false,
        removeContainer: true
    }
}
