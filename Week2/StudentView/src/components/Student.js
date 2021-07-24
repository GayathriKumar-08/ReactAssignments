import React, { Component } from 'react'

export default class Student extends Component {
    constructor(props)
    {
       super(props);
        this.state = {
            studroll:this.props.studroll,
            studname:this.props.studname
          };

          this.handleOnclick=this.handleOnclick.bind(this);
    }
      handleOnclick=()=>
      {
          this.setState((prev)=>
          {
              return{
                  ...prev,
                  studroll:prev.studroll,
                  studname:prev.studname
              };
          });
          console.log(this.state)
      }
      UNSAFE_componentWillReceiveProps(nextprops) {
        console.log("This is Unsafe componentReceive Props");
        console.log(nextprops);
       
            this.setState((prev) => {
                return {
                    ...prev,
                    studroll:this.props.studroll,
                    studname: this.props.studname,   
                }
            });   
    }
    render() {
        return (
            <div>
               
                <div>
                     <lable>Student RollNo:</lable>
                     <h4>{this.props.studroll}</h4>
                     </div>
                     <div>
                     <lable>Student Name:</lable>
                     <h4>{this.props.studname}</h4>
                     </div>
                <button onClick={this.handleOnclick}>click me</button>
            </div>
        )
    }
}
