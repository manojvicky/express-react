import React, {Component} from 'react';


class TodoItem extends Component{
   constructor(props){
     super(props);
   }

    render(){
      const deleteItem =  this.props.deleteItem;
      const todolist = this.props.todolist;
        var list = todolist.map(function(value, index){
        return <div className="input-group margin" key={index}><span className="form-control">{value.text}</span><span className="input-group-btn"><button onClick={()=>deleteItem(index)} className="btn btn-primary" type="button">X</button></span></div>})
        return (
    <div className="row">
        <div className="col-md-4">
        {list}
        </div>
    </div>
        );
    }
}
export default TodoItem;
