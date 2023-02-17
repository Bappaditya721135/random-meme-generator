import memelogo from '../img/memelogo.png';

export default function Navbar() {
    return(
        <nav className="navbar">
            <img src={memelogo} alt="meme logo" />
           <div className="nav-text">
           <h3>Meme Generator</h3>
            <p>React Course - Project 3</p>
           </div>
        </nav>
    );
}