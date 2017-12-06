import React, {Component} from 'react';

class AddTodo extends Component{
    constructor(props){
        super(props);
        this.state = {value: ""};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){
        this.setState({value: event.target.value})
        console.log("value: "+this.state.value);
    }

    handleClick(){
        if(this.state.value == ""){
            return
        }
        this.props.setValue(this.state.value);
        this.setState({value: ""})
    }
    render(){
        return(
            <div className="row">
            <div className="col-md-4">
            <div className="input-group">
                <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange}/>
                <span className="input-group-btn">
                <button className="btn btn-primary" id="cli" onClick={this.handleClick}>Add Todo</button>
                </span>
            </div>
            </div>
            </div>
        );
    }
}

export default AddTodo;