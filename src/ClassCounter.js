import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props){
        super(props);
        this.state={
            count:5
        }
    }
    handleIncrease=(e)=>{
        e.preventDefault();
        this.setState({count:this.state.count +2})
    }
    handleDecrease=(e)=>{
        e.preventDefault();
        this.setState({count:this.state.count -4})
    }
    render() {
        return (
            <div>
                <h1>Class Counter:{this.state.count}</h1>
                <br/>
                <button className='cibtn' onClick={this.handleIncrease}>Increase</button>
                <button className='cdbtn' onClick={this.handleDecrease}>Decrease</button>
            </div>
        );
    }
}

export default ClassCounter;
