import Header from './components/Header'
import Pesquisa from './components/Pesquisa'
import UltimosLancamentos from './components/UltimosLancamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100%;
    height: 222vh;
    background-image: linear-gradient(135deg, rgb(255, 59, 33), rgb(255, 197, 173));
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App
