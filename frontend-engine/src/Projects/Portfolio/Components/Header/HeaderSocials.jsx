import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

const HeaderSocials = () => {
    return (
        <div className='header_social'>
            <a href="https://www.linkedin.com/" className="a" target='_blank' rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/" className="a" target='_blank' rel="noreferrer"><FaGithub /></a>
            <a href="https://dribbble.com/" className="a" target='_blank' rel="noreferrer"><FiDribbble /></a>
        </div>
    )
}

export default HeaderSocials;