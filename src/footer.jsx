import './footer.scss'
import linkedin from './public/images/linkedin.png'

function Footer() {
    return (
      <div className="footer">
        <span> Connect with Me! </span>
        <a href='https://www.linkedin.com/in/fabian-toh-98-smuis/' target="_blank" rel='nofollow noreferrer'>
            <img src={linkedin} alt='LinkedIn'/>
        </a>
      </div>
      );
    }
     
export default Footer;