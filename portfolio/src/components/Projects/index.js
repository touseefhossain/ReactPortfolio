import './index.scss'
import ToastSymbol from '../../assets/images/toast_symbol.png'
import DataProj01 from '../../assets/images/Data_project_01.png'
import DataProj02 from '../../assets/images/Data_project_02.png'
import Froggy01 from '../../assets/images/Froggy_01.png'
import RunningToast01 from '../../assets/images/running_toast_01.png'
import WatchList01 from '../../assets/images/WatchList_01.png'
import { NavLink } from 'react-router-dom'

const Projects = () =>{
    return(
        <div className= 'container projects-page'>
            <img className = 'logo-container' src = {ToastSymbol} alt="toast-logo"/>
            <div className='title'>
                <h1 className='title-text'>My Coding Endeavors</h1>
            </div>
            <div className= 'intro-text'>
                <p>
                    What you will find on this page are details on some of my more ambitous coding 
                    projects. These include interesting projects developed during my time as an 
                    undergrad, and programs that I have developed on my own time. There are some 
                    projects in which I cannot share all the code due to complications (will be 
                    explained in more detail when discussing the specified project), but from what 
                    I can share, it will be available on my Github. 
                </p>
            </div>
            <div className= 'section school-work'>
                <h2>School Projects</h2>
                <p className= 'header-text'>
                    Here are some projects I've done in school that required a bit more than just 
                    a "design, then implement" type of process.
                </p>
                <div className= 'content data-project'>
                    <h3>Productive Screen Time</h3>
                    <h4><i>Data Visualization Project</i></h4>
                    <p>
                        For my DataVis class, we (my groupmates and I) were given the task of creating 
                        a data-driven narrative that provided insight/answers on issues that concerned 
                        a certain demographic. This project spanned over the entire semester and 
                        required numerous tasks in order to complete it. Our group decided to look into 
                        student's screen time on a day-to-day basis to see what it is used for and how 
                        it could potentially be used more productively. We felt this could give great 
                        insight to students on how they can study better. <br/><br/>
                        As an outline for all the major tasks we had to accomplish, we:
                    </p>
                    <ol>
                        <li>
                            Collected personal data on our screen time (consisted of numerous data 
                            attributes such as length of time and physical environment)
                        </li>
                        <li>
                            Compiled and cleaned the collective data to ensure the data is relatively 
                            consistent (done manually first, then on Jupyter Notebook, Python)
                        </li>
                        <li>
                            Developed some data visualizations on Jupyter Notebook using Python 
                            libraries: pandas and plotly
                        </li>
                        <li>
                            Write out a narrative to compliment the visualizations along with draw 
                            out some conclusions that could potentially provide some use for students
                        </li>
                    </ol>
                    <p>
                        Below are some snippets of the code and narrative that we ended up with. The 
                        original source code is harder to extract since my Jupyter Notebook account 
                        has been terminated (school account). If you are interested in seeing the 
                        entire report, feel free to
                        <NavLink className = "link" to="/contact"> contact me</NavLink>.
                        <br/>
                    </p>
                    <div className= 'duo-image'>
                        <img className = 'data-proj01' src = {DataProj01}/>
                        <img className = 'data-proj02' src = {DataProj02}/>
                    </div>
                </div>
                <div className= 'content cp-rail'>
                    <h3>Train Simulation System</h3>
                    <h4><i>Capstone Project with CP Railway</i></h4>
                    <p>
                        For my final year at UofC, I had the honour of working with Canadian Pacific 
                        Railway (CP Rail) for my year-long capstone project. Our (my group and I) 
                        clients over there tasked us with building a system that is able to replicate 
                        real live track. The second big aspect of the system is that there needed to 
                        be a way for a train simulation to run on said replicated track. The two 
                        requirements needed to be broken down into electrical and software components, 
                        where I took the lead role for the software side. Our final design was a PCB 
                        system where each PCB board represented 1000 feet for track and an Arduino 
                        system (primarily programmed in C) that sent signals along the track, 
                        simulating a train running on a track. For a better and more in-depth 
                        explanation, check out the video made by one of my groupmates. 
                    </p>
                    <div className= 'youtube-link'>
                        <iframe src='https://www.youtube.com/embed/uUO5qHXPe3A&ab'/>
                        <i>                        
                            <br/>
                            Playback not working? Use this 
                            <a href='https://www.youtube.com/watch?v=uUO5qHXPe3A&ab_channel=AsadAnjum'
                            rel='noreferrer' target="_blank"> link</a> instead. <br/><br/>
                        </i>
                    </div>
                    <p>
                        With this project, I was involved with the entire product development
                        experience, including steps such as communicating with the client and testing 
                        in a controlled lab setting. Overall, the project was a success and I was 
                        able to learn a lot from the experience. Unfortunately, if you are curious 
                        about the code I've written for the UI or the simulation process, I am not 
                        able to share it as it is now CP Railway's intellectual property.
                    </p>
                </div>
            </div>
            <div className= 'section personal-work'>
                <h2>Passion Projects</h2>
                <p className='header-text'>
                    Outside of school, I have developed some personal projects in order to tackle 
                    new coding territory that was not covered in my undergrad degree. What motivates 
                    me to continue with developing new projects is my zeal to learn new concepts and 
                    to have little fun while developing things that I wanted to make.
                </p>
                <div className= 'content froggy'>
                    <h3>Froggy</h3>
                    <h4><i>Recreational Website Project</i></h4>
                    <p>
                        Froggy is a website I made in order to learn the HTML syntax and CSS language. 
                        There are some small components of JavaScript and PHP in there, but I wouldn't 
                        say that I am well-versed in those languages after completing the website. This 
                        website is dedicated to frogs and keeping them as a pet. I got the idea from a 
                        colleague at work. Frog care is a field I was unfamiliar with and my coworker 
                        inspired me to research more into it. Hence, I developed a passion project 
                        website to deliver my findings. Here are 
                        some snippets of the website below.
                    </p>
                    <div className= 'single-image'>
                        <img className = 'froggy-01' src = {Froggy01}/>
                        <i>
                            <br/>
                            If you want to visit the site yourself, 
                            click <a href='https://preeminent-scone-188a4e.netlify.app/?fbclid=IwAR0C5k
                            jpVtsr-WjYwV2buTJXelQbW3JRC4vRH4eBZe_2XpFElUiykAEhYWM'
                            rel='noreferrer' target="_blank">here</a>
                            <br/><br/>
                        </i>
                    </div>
                    <p>
                        The HTML and CSS languages felt intuitive, and 
                        I am proud of myself for picking up on the language/syntax quickly. I have 
                        developed a more creative mindset through working on this website (my first 
                        one, by the way), in the sense that I am more confident in my stylistic 
                        choices. To see the source code, feel free to check on my GitHub. <br/>
                    </p>
                </div>
                <div className= 'content running-toast'>
                    <h3>RunningToast</h3>
                    <h4><i>Pygame-Based Project</i></h4>
                    <p>
                        Python is a language that was not heavily covered in my undergraduate studies 
                        so I took it upon myself to truly learn its syntax 
                        and features with this next personal project of mine: RunningToast. This is a 
                        simple game I developed using the PyGame library. Similar to the dinosaur 
                        running game found on the Google search engine (when there is no internet), 
                        RunningToast is a straightforward game where the player needs to jump over 
                        obstacles in order to gain points. The sprites and animations were crafted 
                        by yours truly (made sprite sheets on Piskel), and the game includes multiple 
                        phase screens and background music (from some of my favourite medium). 
                    </p>
                    <div className= 'single-image'>
                        <img className = 'running-toast-01' src = {RunningToast01}/>
                    </div>
                    <p>
                        Although it's simple in concept, I made sure 
                        the game was developed in a way in which there are no bugs (as far as I know), 
                        and that it is scalable. The practices I used to make it so were from 
                        my studies, which made me feel proud that I was able to apply theory into an 
                        actual software application. The source code can be found and downloaded 
                        from my GitHub account, so feel free to take a look there. <br/>
                    </p>
                </div>
                <div className= 'content watchlist'>
                    <h3>WatchList</h3>
                    <h4><i>WinForms Desktop App</i></h4>
                    <p>
                        Through some unforeseen circumstances, I had to reset my laptop to its factory 
                        settings. I tried to retain and save as many personal files as I can remember, 
                        but there were some that are regretably lost forever. One of the files was a 
                        notebook text file containing all the TV shows I have watched along with 
                        information of seasons/episodes of shows I'm currently watching. Instead of 
                        creating a new text file, I thought that maybe I can program something a little 
                        nicer to display this 'watchlist' of mine. I have not created any project that 
                        uses a database yet, so I thought this project would be a good way to exercise 
                        the querying theory I've learned in class. To minimize the overlap with my 
                        studies, I decided to learn and utilize the C#.NET framework to create a 
                        WinForms app with a MS SQL Server database connected to it. <br/> <br/>
                        This app separates my 'watchlist' text file into 4 separate categories: 
                        watching, curious, waiting, and finished (denoted as 'WatchList', 'Curiosity 
                        Centre', 'Shrine of Patience', and 'Hall of Fame' respectively). This way, it 
                        will be easier to view the status of the shows I have interest in. I also 
                        implemented a search function that will come to be useful once the database is 
                        filled with many entries (soon to happen). 
                    </p>
                    <div className= 'single-image'>
                        <img className = 'watchlist-01' src = {WatchList01}/>
                    </div>
                    <p>
                        The concept of replacing a text file with something more manageable is 
                        simple in theory, but I did come across a few obstacles when creating this 
                        app. This may not come off as a surprise since this was my first time using 
                        the .NET framework along with using C# and SQL Server. I found that making 
                        unique and vibrant UI designs is much harder and limited in the WinForms 
                        platform. There were some minor shortcuts I had to take in order to produce 
                        this first iteration of the app, but I am proud of what I was able to do in 
                        order to restore a lost file of mine. When I have the time, I would love to 
                        come back to this app and optimize it. Have a look at my GitHub to see the 
                        source code for this project. <br/>
                    </p>
                </div>
                <div className= 'content portfolio'>
                    <h3>Personal Porfolio</h3>
                    <h4><i>React Website</i></h4>
                    <p>
                        This very website is also what I consider a personal project!
                        I have learned that ReactJS is a very popular frontend network for web design 
                        and other applications. I thought it would be a good idea to familiarize myself 
                        with ReactJS along with get more practice with JavaScript by developing my own 
                        personal portfolio website. I also used the EmailJS service to help with 
                        creating a level of interaction with the website, which you can find on the 
                        'Contact' page. Look around the website, and let me know if you have any 
                        feedback!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects