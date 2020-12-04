import Header from "./components/Header";
import Main from "./components/Main";
import Input from "./components/Input";

import { GlobalPrivder } from './context/GlobalState';
import {BrowserRouter as Router,Route} from 'react-router-dom'


import './App.css';

function App() {  

  return (
    <div className="app">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/input823" component={InputPage} />
      </Router>
    </div>
  );
}

function Home(){

  return (
    <GlobalPrivder> 
      <div className="app">
      <Header />
      <Main />
      </div>
    </GlobalPrivder>
  )
}

function InputPage(){

  return (
    <GlobalPrivder>
      <div>
        <Input/>
      </div>
    </GlobalPrivder>
  )
}

export default App;
