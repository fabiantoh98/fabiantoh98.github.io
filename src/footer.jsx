import './footer.scss'
import linkedin from './public/images/linkedin.png'

function Footer() {
    return (
      <div className="footer">
        <p> Connect with Me! </p>
        <a href='https://www.linkedin.com/in/fabian-toh-98-smuis/' target="_blank" rel='nofollow noreferrer'>
            <img src={linkedin} alt='LinkedIn'/>
        </a>
      </div>
      );
    }
     
export default Footer;