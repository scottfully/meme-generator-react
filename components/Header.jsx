import trollFace from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <a href="/" className="header-link">
                <img 
                    src={trollFace} 
                    alt="Meme Generator"
                />
                <h1>Meme Generator</h1>
            </a>
        </header>
    )
}