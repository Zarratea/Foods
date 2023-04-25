import './App.css';
import { Route, Switch ,BrowserRouter} from "react-router-dom";
import LandingPega from './components/LandingPage/LandingPega.jsx'
import Home from './components/Home/home.jsx'
import FormCreate from './components/Form/formCreateRecipes';
import DetailById from './components/Detail/detail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>

        <Route exact path='/' component={LandingPega}/>

        <Route path='/home' component={Home}/>

        <Route path='/createRecipe' component={FormCreate}/>

        <Route path='/detail/:Id' component={DetailById}/>

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
