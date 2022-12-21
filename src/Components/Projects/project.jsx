import './project.css'
import { AiFillGithub } from 'react-icons/ai';
import { ImLink } from 'react-icons/im'

export default function Project({projectInfo}) {
    return (
        <a className="content-card col-11 col-lg-5 my-4" id={projectInfo.id} href={projectInfo.href} target="_blank">
            <div></div>
            <p>{projectInfo.projectInfo}</p>
            <h4 style={{display: "flex", alignItems: "center"}}>
                {projectInfo.projectTitle}
                <AiFillGithub onClick={(e)=>{
                    e.stopPropagation();
                    window.open("https://www.google.com", "_blank")
                }} className='github-icon'/>
                <ImLink/>
            </h4>
        </a>
    )
}