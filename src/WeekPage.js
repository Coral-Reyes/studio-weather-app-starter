import React from 'react'
import Header from './Header'
import getForecast from '.weatherData.js'
class WeekPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      forecast:[]
    };
  }
    }
class WeekPage extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header title='5 Day Forecast'/>
      </div>
    )
  }
}
componentDidMount(){
  var self = this;
  getForecast(function(data){
    self.setState({forecast.data.list})
  })
}

export default WeekPage