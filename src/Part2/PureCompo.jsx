// used for class component to stop rerendering when there is not state changed in dom

import { Component ,PureComponent }  from "react";
import { Button } from "react-bootstrap";

export default class PureCOompo extends PureComponent{
    constructor(){
        super()

        this.state ={
            name : 'Sanju',
            age : 25,
            count : 0
        }
    }

    UpdateData() {
     this.setState({name : "Raj"})
     this.setState({age :40})

    }

    render(){
        console.log(this.state.count)
        return(
            <>
            <h1>Hello is this pure component</h1>
            <h2>{this.state.name}</h2>
            <h2>{this.state.age}</h2>
            <Button onClick={()=>this.UpdateData()}>
                Click Update Details
            </Button>
            <h1>{this.state.count}</h1>
            <Button onClick={()=>this.setState({count :this.state.count +1})}>
               Counter
            </Button>
        
            </>
        )
    }
}

