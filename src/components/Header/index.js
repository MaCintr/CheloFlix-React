import Icons from "../Icons";
import OpcoesHeader from "../OpcoesHeader";
import Logo from "../logo";
import styled from "styled-components";

const HeaderContainer = styled.header`
 
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        
`

function Header() {
    return (
        <HeaderContainer>
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <Icons></Icons>
        </HeaderContainer>
    )
}

export default Header