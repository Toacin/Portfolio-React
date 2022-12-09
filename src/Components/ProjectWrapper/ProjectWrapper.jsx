import './ProjectWrapper.css'
import Project from '../Projects/project'
import { useState, useRef } from 'react'
import { useEffect } from 'react';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

export default function ProjectWrapper() {
    let projectInfo = [
        {
            id: "reactPortfolio", 
            href: "https://github.com/Toacin/Portfolio-React", 
            projectInfo: "I hope you enjoyed browsing through this portfolio as much as I enjoyed making it! This was made mostly fromm vanilla CSS save a couple components from Bootstrap, and a contact me form inspired from Materialize CSS. Click this box to view repository and learn more!",
            projectTitle: "This Portfolio!"
        },
        {
            id: "onlyDevs", 
            href: "https://github.com/daniel-valean/OnlyDevs", 
            projectInfo: "Get your project funded! Our motivation for this website is to establish a place for developers and startups to post the link to their application, a description of the application, and how donations would help them fulfill their vision. The webpage allows the user to sign up/log in and donate money to their preferred projects using stripe.",
            projectTitle: "OnlyDevs"
        },
        {
            id: "assignment2", 
            href: "https://github.com/Toacin/Toacins-Tech-Connect", 
            projectInfo: "Get in the conversation! Toacin's Tech Connect is a blog site made for developers to communicate with eachother through public, forum-style feeds. Find a post interesting and want to comment on it, or want to make your own post? Create an account and start connecting with others!",
            projectTitle: "Toacin's Tech Connect"
        },
        {
            id: "assignment3", 
            href: "https://github.com/Dustinm5Oly/Skriptz", 
            projectInfo: "Tired of managing all your subscriptions? In today's age, everything is monetized via subscriptions, and it's hard to keep track of them all, especially the ones we don't use. Skriptz is a great place to manage your subscriptions, and even keep store of your username and password hint for said account. Save money by using Skriptz!",
            projectTitle: "Skriptz"
        },
        {
            id: "assignment4", 
            href: "https://github.com/JamesXalis/Reel_Search", 
            projectInfo: "Tired of the age-old question: what movie should we watch tonight? Say less! The point of this website is to provide users with a convenient movie search engine and to allow them to view movie information, trailers, movies in theaters, new dvd releases, and Oscar winners. Create a backlog while you're at it, and you'll never be in doubt what to watch next.",
            projectTitle: "Reel Search"
        },
        {
            id: "assignment5", 
            href: "https://github.com/Toacin/Timed-Coding-Quiz", 
            projectInfo: "Put your coding skills to the test! Take my 1 minute coding challenge by answering five introductory coding questions and see how you fare. Want to challenge someone next to you? Save your highscores with your initials and compete for the highest score!",
            projectTitle: "Coding Quiz"
        },
        {
            id: "assignment6", 
            href: "https://github.com/Toacin/Weather-Planning-Dashboard", 
            projectInfo: "Don't you hate planning a trip, just for all that to be ruined by adverse weather conditions? This weather planning dashboard will solve all of that. Simply enter a city, and get instant weather data for that day, as well as a five day forecast. Searched cities will be saved in history, so you can quickly toggle through multiple cities and find the city right for you.",
            projectTitle: "Weather Dashboard"
        },
        {
            id: "assignment7", 
            href: "https://github.com/Toacin/E-Commerce-Database-BackEnd", 
            projectInfo: "Ever wonder how the back of e-commerce, shopping websites keep track of all those orders coming in everyday? Well, take a deep dive into the backend with my database project. Here, I've developed the back-end of an example site to support purchases, inventory, and much more.",
            projectTitle: "E-Commerce Back End"
        },
    ]

    const [page, setPage] = useState(1);

    function renderActive(index) {
        return index === page ? "pagination-active" : null;
    }

    function nextPage() {
        if (page !== 4) {
            setPage(page+1)
        }
    }

    function prevPage() {
        if (page !== 1) {
            setPage(page-1)
        }
    }

    function renderProjects() {
        let projectsInView;
        switch(page) {
            case 1:
                projectsInView = projectInfo.slice(0,2);
                break;
            case 2:
                projectsInView = projectInfo.slice(2,4);
                break;
            case 3:
                projectsInView = projectInfo.slice(4,6);
                break;
            case 4:
                projectsInView = projectInfo.slice(6);
                break;           
        }
        return projectsInView.map((element) => (
            <Project key={element.id} projectInfo={element}/>
        ))
    }

    return (
        <div className="row justify-content-around align-items-stretch py-5 project-wrapper">
            {renderProjects()}
            <div style={{display: "flex", width: "100%", justifyContent: "center", paddingTop: "70px", alignItems: "center"}}>
                <div onClick={()=>prevPage()} className='pagination-arrows-holder'>
                    <p className='pagination-elements-arrow'><AiOutlineLeft /></p>
                </div>
                <div onClick={()=>setPage(1)} className={`pagination-items-holder ${renderActive(1)}`}>
                    <p className='pagination-elements'>1</p>
                </div>
                <div onClick={()=>setPage(2)} className={`pagination-items-holder ${renderActive(2)}`}>
                    <p className='pagination-elements'>2</p>
                </div>
                <div onClick={()=>setPage(3)} className={`pagination-items-holder ${renderActive(3)}`}>
                    <p className='pagination-elements'>3</p>
                </div>
                <div onClick={()=>setPage(4)} className={`pagination-items-holder ${renderActive(4)}`}>
                    <p className='pagination-elements'>4</p>
                </div>
                <div onClick={()=>nextPage()} className='pagination-arrows-holder'>
                    <p className='pagination-elements-arrow'><AiOutlineRight /></p>
                </div>
            </div>
        </div>
    )
}