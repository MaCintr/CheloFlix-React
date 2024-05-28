import './style.css'

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']


function OpcoesHeader() {
    return (
        <ul className='options'>
        { textOptions.map( (text) => (
          <li className='option'><p>{text}</p></li>
        ) ) }
      </ul>
    )
}

export default OpcoesHeader