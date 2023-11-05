import logo from './logo.svg';
import './App.css';
import TableComponent from "./components/table";
import{Routes,Route,BrowserRouter}from "react-router-dom";
import SomeComponent from "./components/somecomponents";
import HookComponent from './components/hookcomponent';
import  TimeBomb  from './components/timebomb';
import HomePage from './components/homepage';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
