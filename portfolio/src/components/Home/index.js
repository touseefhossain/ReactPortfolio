import { Link } from 'react-router-dom'
import './index.scss'
import ToastSymbol from '../../assets/images/toast_symbol.png'

const Home = () => {
    return(
        <div className = "container home-page">
            <div className = "text-zone">
                <h1 className= 'title-text'>Hello World! The name's</h1>
                <div className = 'boxed'>
                    <Link to = "/profile" className = 'profile-button'>
                        <h1 className = "highlighted-text">Touseef Hossain</h1>
                        <h2>Aspiring Software Engineer</h2>
                    </Link>
                </div>
                <div className = 'contact-button'>
                    <Link to = "/contact" className = 'flat-button'>
                        CONTACT ME
                    </Link>
                    <h3>straight to the point &#11181;</h3>
                </div>
            </div>
            <img className = 'logo-container' src = {ToastSymbol} alt="toast-logo"/>
        </div>
    )
}

export default Home;