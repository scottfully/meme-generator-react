import html2canvas from "html2canvas"
import { DOWNLOAD_CONFIG } from "../config/memeConfig"

export default function DownloadButton({ memeImageId }) {
    function downloadMeme() {
        const memeElement = document.getElementById(memeImageId);
        html2canvas(memeElement, DOWNLOAD_CONFIG.canvasOptions).then(canvas => {
            const link = document.createElement('a');
            link.download = `${DOWNLOAD_CONFIG.defaultFilename}.${DOWNLOAD_CONFIG.fileFormat}`;
            link.href = canvas.toDataURL(`image/${DOWNLOAD_CONFIG.fileFormat}`);
            link.click();
        });
    }

    return (
        <button className="download-button" onClick={downloadMeme}>
            Download Meme
        </button>
    )
}
