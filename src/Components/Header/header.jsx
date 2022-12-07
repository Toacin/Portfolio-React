import './header.css';
import ProfilePic from '../../images/Updated-Profile-Picture2.JPG';
import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai';


export default function Header() {
    return (
        <header>
            <div>
                <img src={ProfilePic} alt="Picture of myself"/>
                <h2>Toacin Patwary</h2>
            </div>
            <nav>
                <a className='header-anchor' rel="noreferrer" href="https://www.github.com/Toacin" target="_blank"><AiFillGithub/></a>
                <a className='header-anchor' rel="noreferrer" href="https://www.linkedin.com/in/toacin-patwary-985728256/" target="_blank"><AiFillLinkedin/></a>
                <a className='header-anchor'rel="noreferrer" href="https://www.twitter.com/twaseeen" target="_blank"><AiFillTwitterCircle/></a>
            </nav>
        </header>
    )
}