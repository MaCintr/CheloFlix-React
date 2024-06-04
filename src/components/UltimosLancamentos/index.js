import { filmes } from "./dados"
import styled from "styled-components"

const Titulo = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;
    font-optical-sizing: auto;
    font-style: normal;
    font-size: 80px;
    margin-top: 200px;
    color: #000000;
    cursor: default;
    width: 100%;
    height: 200px;
    background-color: #ffffff;
    text-shadow: 3px 3px 3px rgb(255, 59, 33);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`

const Imagem = styled.img`
transition:0.1s;
width: 240px;
cursor: pointer;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


&:hover {
    transition: 0.3s;
    width: 250px;
}
`

const NomeFilme = styled.p`
font-size: 30px;
color: #ffffff;
font-weight: bold;
`

const ListaFilmes = styled.div`
display: flex;
margin-bottom: 100px;
`

const Filme = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-left: 50px;
padding-left: 10px;
padding-right: 10px;
padding-bottom: 10px;
`

const LancamentosContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;    
`

function UltimosLancamentos() {
    return (
        <LancamentosContainer>
            <Titulo>Últimos Lançamentos</Titulo>
            <ListaFilmes>
                {filmes.map(filme => (
                    <Filme>
                        <NomeFilme>{filme.nome}</NomeFilme>
                        <Imagem src={filme.src} />
                    </Filme>
                ))}
            </ListaFilmes>
        </LancamentosContainer>
    )
}

export default UltimosLancamentos