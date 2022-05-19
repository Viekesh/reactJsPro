import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
    return (
        <section id='experience' className='section'>
            <h5>What Skills I have</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text_light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text_light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text_light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>ReactJs</h4>
                                <small className="text_light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>Figma</h4>
                                <small className="text_light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>PhotoshopCC</h4>
                                <small className="text_light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>NodeJs</h4>
                                <small className="text_light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>Python</h4>
                                <small className="text_light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text_light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>Firebase</h4>
                                <small className="text_light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>AWS</h4>
                                <small className="text_light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;