import { Route } from 'react-router';
import './App.css';
import CharacterList from './components/CharacterList';



function App() {
  return (
    <main>
      <h1>Rick N Morty</h1>
      <Route path='./character' component={CharacterList}/>
    </main>
  );
}

export default App;
