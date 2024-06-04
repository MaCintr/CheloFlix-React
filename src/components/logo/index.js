import logo from '../../images/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
display: flex;
margin: 0px 0px 0px 20px;
font-size: 200%;
cursor: default;
text-shadow: 2px 2px 2px rgb(255, 59, 33);
`

const LogoImg = styled.img`
min-width: 50px;
max-width: 70px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImg src={logo} alt='Logo'></LogoImg>
            <p><strong>Chelo</strong>Flix</p>
        </LogoContainer>
    );
}

export default Logo