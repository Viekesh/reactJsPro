import './Portfolio.css';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';
import portfolio1 from '../../Assets/portfolio1.jpg';
import portfolio2 from '../../Assets/portfolio2.jpg';
import portfolio3 from '../../Assets/portfolio3.jpg';
import portfolio4 from '../../Assets/portfolio4.jpg';
import portfolio5 from '../../Assets/portfolio5.png';
import portfolio6 from '../../Assets/portfolio1.jpg';

const Portfolio = () => {
    return (
        <section id='portfolio' className='section'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">

                {
                    data.map({ id, image, title, github, demo }) => {

                    <article className='portfolio_item' key={id}>
                        <div className="portfolio_item_img">
                            <img src={image} alt="" />
                        </div>
                        <h3>{title}</h3>
                        <a href="https://github.com/" target='_blank' rel="noreferrer" className="a btn"><FaGithub />GitHub</a>
                        <a href="https://dribbble.com/" target='_blank' rel="noreferrer" className="a btn btn-"><FiDribbble />Live Demo</a>
                    </article>

                }
                }
            </div>
        </section>
    )
}

export default Portfolio;