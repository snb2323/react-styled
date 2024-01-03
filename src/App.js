import styled from 'styled-components';
import './App.css';
import Mycom from './Mycom';
const Button = styled.button
  `color:red;
background-color:black;
border-radius:50rem;
display:block;
width:150px;
height:150px;
margin: 0 auto;
border:0;
font-size:2rem`;


const Outputcom = styled(Mycom)`
  padding: 30px;
`

function App() {
  return (
    <div className="App">
      <Button>Click</Button>
      <Mycom cls="red">니가 바로 children이야</Mycom>
      <Mycom>니가 바로 children이야</Mycom>
      <Mycom>니가 바로 children이야</Mycom>
      <Outputcom>손코딩</Outputcom>

    </div>
  );
}

export default App;
