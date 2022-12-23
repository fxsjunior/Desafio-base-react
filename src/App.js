import './App.css';
import { ButtonAlert } from './components/button/button';
import { ColorRedText } from './components/text/text';

function App() {
  return (
    <div>
      <ButtonAlert></ButtonAlert>
      <ButtonAlert label='Bixar CV'></ButtonAlert>
      <ColorRedText color='red'>Esse é um parágrafo maiúsculo e colorido do componente ColorRedText </ColorRedText>
    </div>
  );
}

export default App;
