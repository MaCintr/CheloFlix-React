import Icons from "../Icons";
import OpcoesHeader from "../OpcoesHeader";
import Logo from "../logo";
import './style.css'

function Header() {
    return (
        <header className="App-header">
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <Icons></Icons>
        </header>
    )
}

export default Header