import './ProjectWrapper.css'
import Project from '../Projects/project'

export default function ProjectWrapper() {
    let projectInfo = [
        {
            id: "assignment2", 
            href: "https://github.com/Toacin/Toacins-Tech-Connect", 
            projectInfo: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis perspiciatis repellendus iusto. Ex incidunt delectus porro necessitatibus tempore mollitia nemo eos laudantium possimus. Laborum molestiae fugiat, atque qui nisi voluptates?",
            projectTitle: "Toacin's Tech Connect"
        },
        {
            id: "assignment3", 
            href: "https://github.com/Dustinm5Oly/Skriptz", 
            projectInfo: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis perspiciatis repellendus iusto.",
            projectTitle: "Skriptz"
        },
        {
            id: "assignment4", 
            href: "https://github.com/JamesXalis/Reel_Search", 
            projectInfo: "The point of this website is to provide users with a convenient movie search engine and to allow them to view movie information, trailers, movies in theaters, new dvd releases, and Oscar winners.",
            projectTitle: "Reel Search"
        },
        {
            id: "assignment5", 
            href: "https://github.com/Toacin/Timed-Coding-Quiz", 
            projectInfo: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis perspiciatis repellendus iusto. Ex incidunt delectus porro necessitatibus tempore mollitia nemo eos laudantium possimus. Laborum molestiae fugiat, atque qui nisi voluptates?",
            projectTitle: "Coding Quiz"
        },
        {
            id: "assignment6", 
            href: "https://github.com/Toacin/Weather-Planning-Dashboard", 
            projectInfo: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis perspiciatis repellendus iusto. Ex incidunt delectus porro necessitatibus tempore mollitia nemo eos laudantium possimus. Laborum molestiae fugiat, atque qui nisi voluptates?",
            projectTitle: "Weather Dashboard"
        },
        {
            id: "assignment7", 
            href: "https://github.com/Toacin/E-Commerce-Database-BackEnd", 
            projectInfo: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis perspiciatis repellendus iusto. Ex incidunt delectus porro necessitatibus tempore mollitia nemo eos laudantium possimus. Laborum molestiae fugiat, atque qui nisi voluptates?",
            projectTitle: "E-Commerce Back End"
        },
    ]

    return (
        <div className="row justify-content-around align-items-stretch py-5 project-wrapper">
            {projectInfo.map((element) => (
                <Project key={element.id} projectInfo={element}/>
            ))}
        </div>
    )
}

