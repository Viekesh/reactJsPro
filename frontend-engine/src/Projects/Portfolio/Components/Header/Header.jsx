import './Header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div id='home' className='container header_container'>
                <h5>Hello I'm</h5>
                <h1>Abc Def</h1>
                <h5 className="text-light">Full Stack Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">

                </div>
                <a href="/down" className="a scroll_down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;