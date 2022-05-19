import './About.css';
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about' className='section'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_img">
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <FaAward className='about_icon' />
                            <h5>Experience</h5>
                            <small>3 Years Working</small>
                        </article>

                        <article className='about_card'>
                            <FiUser className='about_icon' />
                            <h5>Client</h5>
                            <small>200+ Clients Worldwide</small>
                        </article>

                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon' />
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis cupiditate sequi dignissimos optio, exercitationem ad quasi? Quod dolorem, numquam maiores blanditiis ad libero ut soluta deleniti obcaecati est sed nulla.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>

            </div>
        </section>
    )
}

export default About;