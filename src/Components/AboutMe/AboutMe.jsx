import './AboutMe.css'
import ProfilePic from '../../images/Updated-Profile-Picture.PNG'

export default function AboutMe() {
    return (
        <div id="about-me-wrapper">
            <img src={ProfilePic} alt="Picture of myself"/>
            <section id="about-me">
                <h3>About Me</h3>
                <p>Hi there! My name is Toacin Patwary. I am a prospective full-stack web developer from Phoenix Arizona. A few things about myself: I am driven, opportunistic, and always motivated to learn. There is nothing that I love more than my two cats. Thank you for visiting my page!</p>
            </section>
        </div>
    )
}