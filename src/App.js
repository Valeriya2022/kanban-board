import './App.css';
import {ListBacklog} from './components/ListBacklog';
import {ListReady} from './components/ListReady';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import React from 'react';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backlogData: this.getInitialData("backlogContent"),
      readyData: this.getInitialData("readyContent"),
      progressData: this.getInitialData("progressContent"),
      finishedData: this.getInitialData("finishedContent")
    };
    this.handleBacklogChange = this.handleBacklogChange.bind(this);
    this.handleReadyChange = this.handleReadyChange.bind(this);
    this.handleProgressChange = this.handleProgressChange.bind(this);
    this.handleFinishedChange = this.handleFinishedChange.bind(this);
  }
  
  handleBacklogChange(content) {
    this.setState({ backlogData: content });
  }
  handleReadyChange(content) {
    this.setState({ readyData: content });
  }
  handleProgressChange(content) {
    this.setState({ progressData: content });
  }
  handleFinishedChange(content) {
    this.setState({ finishedData: content });
  }
  getInitialData(content) {
    let initialData = JSON.parse(localStorage.getItem(content));
    if (initialData === null){
        initialData = []
    }
    return initialData
}
  render(){
    return (
      <div className={"App"}>
        <Header/>
        <div className={"Container"}>
          <ListBacklog title="Backlog" 
          storage="backlogContent" 
          handleChange={this.handleBacklogChange}
          data={this.state.backlogData}

          />
          <ListReady title="Ready"
          data = {this.state.readyData}
          setData={this.handleReadyChange}
          prevData={this.state.backlogData}
          setPrevData={this.handleBacklogChange}
          storage="readyContent"
          prevStorage="backlogContent"/>
          <ListReady title="In Progress"
          data = {this.state.progressData}
          setData={this.handleProgressChange}
          prevData={this.state.readyData}
          setPrevData={this.handleReadyChange}
          storage="progressContent"
          prevStorage="readyContent"/>
          <ListReady title="Finished"
          data = {this.state.finishedData}
          setData={this.handleFinishedChange}
          prevData={this.state.progressData}
          setPrevData={this.handleProgressChange}
          storage="finishedContent"
          prevStorage="progressContent"/>
          
        </div>
        
        <Footer activeTasks={this.state.backlogData.length} finishedTasks={this.state.finishedData.length}/>
      </div>
      
    );
  }
  
}

export default App;
