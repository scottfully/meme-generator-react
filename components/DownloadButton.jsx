import html2canvas from "html2canvas"

export default function DownloadButton() {
    function downloadMeme() {
        const memeElement = document.getElementById("memeToDownload");
        html2canvas(memeElement, { useCORS: true }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'my-meme.jpg';
            link.href = canvas.toDataURL('image/jpeg');
            link.click();
        });
    }

    return (
        <button className="download-button" onClick={downloadMeme}>
            Download Meme
        </button>
    )
}
