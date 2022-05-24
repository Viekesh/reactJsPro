import './Services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
    return (
        <section id='services' className='section'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services_container">
                <article className="services">
                    <div className="service_head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>

                <article className="services">
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>

                <article className="services">
                    <div className="service_head">
                        <h3>Testing</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services;