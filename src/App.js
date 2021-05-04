import './App.css';
import {ListBacklog} from './components/ListBacklog';
import {Header} from './components/Header';
import {Footer} from './components/Footer';


function App() {
  return (
    <div className={"App"}>
      <Header/>
      <div className={"Container"}>
        <ListBacklog/>
        <ListBacklog/>
        <ListBacklog/>
        <ListBacklog/>
        
      </div>
      
      <Footer/>
    </div>
    
  );
}

export default App;
