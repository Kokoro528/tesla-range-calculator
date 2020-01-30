import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import TeslaBattery from './containers/TeslaBattery';

const counterDefaultVal = {
    speed: {
      title: "Speed",
      unit: "mph",
      step: 5,
      min: 45,
      max: 70
    },
    temperature: {
      title: "Outside Temperature",
      unit: "°",
      step: 10,
      min: -10,
      max: 40
    }
  };
class App extends Component {
    render() {
        return (
            <div className="App">
            <Header />
            <TeslaBattery counterDefaultVal={counterDefaultVal}/>
            </div>
        )
    }
}
// function App() {
//     return (
//         <App>
//             <Header> </Header>
//             <TeslaBattery>
//                 <TeslaCar />
//                 <TeslaStats />
//                 <TeslaCounter />
//                 <TeslaClimate />
//                 <TeslaWheels />
//                 <TeslaNotice />
//             </ TeslaBattery>
//         </App>


//     );
// }

export default App;
