import './Footer.css'
import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
import {TfiLocationPin} from 'react-icons/tfi';

export default function Footer() {
    return (
        <div id="footer">
            <div id="footer-contact-wrapper">
                {/* <h2 id='footer-contact-title'>Connect</h2>
                <div className="vl"></div> */}
                <div className="footer-contact-elements-wrapper">
                    <p className='footer-contact-elements'><AiOutlineMail className='footer-contact-icon'/> toacinp@outlook.com</p>
                    <div className="vl2"></div>
                    <p className='footer-contact-elements'><AiOutlinePhone className='footer-contact-icon'/> +1 (602) 687-3713</p>
                    <div className="vl2"></div>
                    <p className='footer-contact-elements'><TfiLocationPin className='footer-contact-icon'/> Phoenix, AZ</p>
                </div>
            </div>
            <div id='footer-nav'>
                <a rel="noreferrer" href="https://www.github.com/Toacin" target="_blank"><AiFillGithub/></a>
                <a rel="noreferrer" href="https://www.linkedin.com/in/toacin-patwary-985728256/" target="_blank"><AiFillLinkedin/></a>
                <a rel="noreferrer" href="https://www.twitter.com/twaseeen" target="_blank"><AiFillTwitterCircle/></a>
            </div>
        </div>
    )
}