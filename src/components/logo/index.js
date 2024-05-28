import './style.css'
import logo from '../../images/logo.svg'

function Logo() {
    return (
        <div className='logo'>
            <img className='logo-img' src={logo} alt='Logo'></img>
            <p><strong>Chelo</strong>Flix</p>
        </div>
    );
}

export default Logo