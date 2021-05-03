import './App.css';
import {List} from './components/List';
import {Header} from './components/Header';
import {Footer} from './components/Footer';


function App() {
  return (
    <div className={"App"}>
      <Header/>
      <div className={"Container"}>
        <List/>
        <List/>
        <List/>
        <List/>
      </div>
      
      <Footer/>
    </div>
    
  );
}

export default App;
