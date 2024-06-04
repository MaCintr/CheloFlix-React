import Input from '../Input'
import styled from 'styled-components'
import React, { useState } from 'react'
import { filmes } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;    
    height: 850px;
`

const Titulo = styled.h2`
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-size: 80px;
    margin-top: 200px;
    color: #ffffff;
    cursor: default;
`

const Subtitulo = styled.h3`
    color: #ffffff;
    cursor: default;
    font-size: 25px
`

const Imagem = styled.img`
transition:0.1s;
width: 200px;
cursor: pointer;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


&:hover {
    transition: 0.3s;
    width: 210px;
}
`

const NomeFilme = styled.p`
font-size: 30px;
color: #ffffff;
font-weight: bold;
`

const ListaFilmes = styled.div`
display: flex;
justify-content: center;
`

const Filme = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 20px;
padding-left: 10px;
padding-right: 10px;
padding-bottom: 10px;
`

function Pesquisa() {
    const [filmesPesquisados, setFilmesPesquisados] = useState([])
    console.log(filmesPesquisados)
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu Filme em nosso Catálogo!</Subtitulo>
            <Input 
                placeholder="Escreva o nome da sua próxima experiência..."
                onChange={event => {
                    const inputText = event.target.value
                    const resultadoPesquisa = filmes.filter(filme => filme.nome.includes(inputText))
                    setFilmesPesquisados(resultadoPesquisa)
                }}
            />
            <ListaFilmes>
            {filmesPesquisados.map( filme => (
                <Filme>
                    <NomeFilme>{filme.nome}</NomeFilme>
                    <Imagem src={filme.src}></Imagem>
                </Filme>
            ))}
            </ListaFilmes>
        </PesquisaContainer>
    )
}

export default Pesquisa