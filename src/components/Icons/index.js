import './style.css'
import Profile from '../../images/perfil.svg'
import Cart from '../../images/carrinho.svg'

const icons = [Profile, Cart]

function Icons() {
    return (
    <ul className='icons'>
    { icons.map( (icon) => (
        <li ><img className='icon' src={icon} alt='icone'></img></li>
      ) ) }
    </ul>
    )
}

export default Icons