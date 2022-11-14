import './index.scss'
import ToastSymbol from '../../assets/images/toast_symbol.png'
import ProfilePic from '../../assets/images/Portfolio_profile_pic.jpg'
import SWCPic from '../../assets/images/SWC_logo.png'
import IBPic from '../../assets/images/IB_logo.png'
import UofCPic from '../../assets/images/UofC_logo.png'
import BoxingPic from '../../assets/images/boxing_pic.jpg'
import ProgrammingPic from '../../assets/images/programming_pic.jpg'
import React from 'react'

const About = () => {
    return(
        <div className='container profile-page'>
            <img className = 'logo-container' src = {ToastSymbol} alt="toast-logo"/>
            <div className='title'>
                <h1 className='title-text'>About Me...</h1>
            </div>
            <div className='profile-stats'>
                <p>
                    <b>Name: </b>Touseef Hossain <br/>
                    <b>Nickname: </b>"Toast" <br/>
                    <b>Pronouns: </b>He/Him <br/>
                    <b>Occupation: </b>Recent Graduate <br/>
                    <b>Date of Birth: </b>Nov 23, 1998 <br/>
                    <b>Height: </b>5'10" (177 cm) <br/>
                    <b>Weight: </b>160 lbs (72.6 kg)
                </p>
            </div>
            <div className='text-zone1'>
                <p>
                    <b className='heading'>Where I'm From: </b> <br/>
                    I am the son of Banglasdeshi immigrant parents . 
                    I was born in Columbus, Ohio, but raised mostly in Canada (dual citizen; best of
                    both worlds). I have moved a lot in my lifetime, from city to city, but have spent 
                    most of my time in Calgary, Alberta (where I currently reside in). <br/>
                </p>
                <p>
                    <b className='heading'>My Goal: </b> <br/>
                    I'm an aspiring software engineer who hopes to use their skills to create/develop 
                    meaningful software. What do I mean by "meaningful"? Well, I want the projects 
                    that I'm involved in to help people in some shape or form. Whether it 
                    makes their job easier, makes resources more accesible, or if it simply provides 
                    an outlet of entertainment for them. The idea that software products can make life 
                    easier and more fun is what drives me to pursue software engineering.
                </p>
            </div>
            <img className = 'profile-pic' src = {ProfilePic} alt="personal-pic"/>
            <div className='text-zone2'>
                <p>
                    <b className='heading'>Education: </b> <br/>
                    For high school, I attended Sir Winston Churchill High School, where I enrolled 
                    in the International Baccalaureate Programme (IB). The experience I gained from 
                    the program helped build the foundation for my good studying habits and zeal 
                    to continously learn. From there, I attended and recently graduated from the 
                    University of Calgary (UofC), where I majored in Software Engineering. I have 
                    learned and practiced with many languages such as Java, C, C++, and MySQL. 
                    Some of the specialty courses I have taken involve fields such as VR systems, 
                    data analysis/visualization, requirements engineering, and basic-level 
                    psychology. <br/>
                </p>
                <p>
                    Aside from formal academics, I have taught myself numerous of coding languages 
                    design patterns through online material and passion projects (which is covered 
                    more in the "Projects" section). Some of the languages include Javascript, Python 
                    (somewhat shocking that my undergrad degree didn't cover it), HTML, and CSS.
                </p>
            </div>
            <img className = 'swc-pic' src = {SWCPic}/>
            <img className = 'ib-pic' src = {IBPic}/>
            <img className = 'uofc-pic' src = {UofCPic}/>
            <div className='text-zone3'>
                <p>
                    <b className='heading'>Hobbies: </b> <br/>
                    As shocking as this may seem, but aside from academic studies, I like to work on 
                    small coding projects recreationally. I find enjoyment in being able to create 
                    working applications and calling it my very own. These projects also serve as an 
                    outlet for me to learn new languages/concepts that were not covered in my undergrad 
                    studies. I do understand that the software field is constantly evolving, so I do see 
                    the importance of staying up to date with current technologies along with having a 
                    drive to constantly learn new things. For more information on some of my personal 
                    projects, check out the "Portfolio" section. <br/>
                </p>
                <p>
                    Aside from the career-oriented aspects of my life, I like to indulge in boxing as a 
                    daily (meaning 4-5 day per week) recreational activity. I find it to be a very fun 
                    and intense way of relieving stress and obtaining cardio. I take personal training 
                    and heavybag classes where one does punch/movement patterns to a beat. I've done 
                    some sparring occasionally, but don't have that big of an interest in actually 
                    competing. I simply enjoy taking these lessons as it provides a way for me to 
                    learn/perfect a martial art while simultaneously giving me a fun way to get my 
                    weekly exercise. <br/>
                </p>
                <p>
                    Lastly, it's important I discuss briefly some hobbies that are common with most 
                    millennials/gen Z kids (I honestly don't know which category I fit into). Yes, I 
                    indulge in games, streaming services, and social media posts. In more recent
                    times, these habits of mine have died down but only because I have been keeping 
                    myself more busy with other aspects of my life. Without opening a large door for 
                    a very long essay, I will now summarize my key interests with regards to these 
                    entertainment platforms. I primarily like Nintendo for gaming, comedies and anime 
                    for streaming, and Reddit and TikTok for social media. Of course, I'm not limited 
                    to those things. But I like to keep this paragraph simple. <br/>
                </p>
                <p>
                    I really do try to maintain a healthy and balanced lifestyle with my part-time 
                    minimum wage job, my boxing classes, my coding passion projects, my relaxing 
                    pastimes, and my time spent with friends/family. Everyday, I continue with the 
                    mindset to stay consistent, so that I can become 1% better each time (something 
                    I learned in boxing).
                </p>
            </div>
            <img className = 'boxing-pic' src = {BoxingPic}/>
            <img className = 'program-pic' src = {ProgrammingPic}/>
        </div>
        
    )
}

export default About