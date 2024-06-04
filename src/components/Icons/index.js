import styled from 'styled-components'
import Profile from '../../images/perfil.svg'
import Cart from '../../images/carrinho.svg'
// import './style.css'


const Icon = styled.li`
    margin-right: 20px;
    min-width: 40px;
    cursor: pointer;
`

const IconsContainer = styled.ul`
display: flex;
margin-left: 20px
`

const icons = [Profile, Cart]

function Icons() {
    return (
    <IconsContainer>
    { icons.map( (icon) => (
        <Icon><img className='icon' src={icon} alt='icone'></img></Icon>
      ) ) }
    </IconsContainer>
    )
}

export default Icons