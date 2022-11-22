import './header.css';
import ProfilePic from '../../images/bitmoji.jpg';
import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai';


export default function Header() {
    return (
        <header>
            <div>
                <img src={ProfilePic} alt="Picture of myself"/>
                <h2>Toacin Patwary</h2>
            </div>
            <nav>
                <a rel="noreferrer" href="https://www.github.com/Toacin" target="_blank"><AiFillGithub/></a>
                <a rel="noreferrer" href="https://www.linkedin.com" target="_blank"><AiFillLinkedin/></a>
                <a rel="noreferrer" href="https://www.twitter.com/twaseeen" target="_blank"><AiFillTwitterCircle/></a>
            </nav>
        </header>
    )
}