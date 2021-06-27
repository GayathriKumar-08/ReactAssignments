import React, { Component } from 'react'

export default class Demo extends Component {
    age;
     constructor()
     {
         super();
         this.age=23;
         this.state={
          label:"hello",
          myage:this.age,
          count:0
         };
         this.handleOnClick=this.handleOnClick.bind(this);
     }
  
     handleOnClick=  ()=> {
         this.setState({
             ...this.state,
             label:"Hello iam label"+new Date(),
            count:this.state.count+1
         })
     }
 

    render() {
        return (
            <div>
                <h2>OnClick Demo</h2>
               {this.state.count}
               <button onClick={this.handleOnClick}>{this.state.label}</button>
            </div>
        )
    }
}


