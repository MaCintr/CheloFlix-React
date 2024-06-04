import styled from 'styled-components'

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MEUS FILMES']
const HeaderOptions = styled.ul`
  display: flex;
  margin-left: 20px;

.option {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 120px;
  font-size: 16px;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
}
`


function OpcoesHeader() {
    return (
        <HeaderOptions>
        { textOptions.map( (text) => (
          <li className='option'><p>{text}</p></li>
        ) ) }
      </HeaderOptions>
    )
}

export default OpcoesHeader