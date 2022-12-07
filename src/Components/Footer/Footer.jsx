import './Footer.css'
import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai'

export default function Footer() {
    return (
        <div id="footer">
            <a rel="noreferrer" href="https://www.github.com/Toacin" target="_blank"><AiFillGithub/></a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/toacin-patwary-985728256/" target="_blank"><AiFillLinkedin/></a>
            <a rel="noreferrer" href="https://www.twitter.com/twaseeen" target="_blank"><AiFillTwitterCircle/></a>
        </div>
    )
}