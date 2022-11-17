import './header.css'
import ProfilePic from '../../images/Updated-Profile-Picture.PNG'

export default function Header() {
    return (
        <header>
            <div>
                <img src={ProfilePic} alt="Picture of myself"/>
                <h2>Toacin Patwary</h2>
            </div>
            <nav>
                <a href="#middle-section">About Me</a>
                <a href="#middle-header">Works</a>
                <a href="#footer">Contact</a>
            </nav>
        </header>
    )
}