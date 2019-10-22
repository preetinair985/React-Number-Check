import React from "react";
import "./App.css";
import NumberCheck from "./component/NumberCheck";
// import Practice from './component/Practice'

export class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       heading:'',
       name:'',
       placeholder:'',
       value:'',
       max:'',
       min:'',
       decimal:''
    }
  }


  changeHandle = (value, name) => {
   
    this.setState({
      [name]: value
    });
    console.log(name+''+value);
  };

 
  
  render() {
    return (
      <div>
        <NumberCheck heading="Age etween limits" name="age" value={3} placeholder="Enter age" min={5} max={10} changeHandle={this.changeHandle} />
        <NumberCheck heading="Age Greater Than Minimum Range" value={3} name="maxage" placeholder="Enter age" min={5}  changeHandle={this.changeHandle} />
        {/* <NumberCheck heading="Age Less Than Maximum Range" value={3} name="minage" placeholder="Enter age" max={10}  changeHandle={this.changeHandle} /> */}
        <NumberCheck heading="Decimal Number" type="text" value={3} name="decnumber" placeholder="Enter a decimal number" decimal={2} changeHandle={this.changeHandle} /> 
      
        <center>
          <h4>{this.state.age}</h4>
          <h4>{this.state.maxage}</h4>
          <h4>{this.state.decnumber}</h4>
        </center>
      </div>
    );
  }
}

export default App;
