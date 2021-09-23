import './App.css';
import { Switch, Route } from 'react-router';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => (
  <div className="">
    <h1>HATS PAGE</h1>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
      </Switch>
      
    </div>
  );
}

export default App;
