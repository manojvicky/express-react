import React, {Component} from 'react';
import axios from 'axios';
import TodoItem from './TodoItem.jsx';
import AddTodo from './AddTodo.jsx';
class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {todolist: []};
        this.setValue = this.setValue.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    setValue(value){
        // console.log("state:"+ this.state.todolist);
        let obj = {};
        obj.text = value;
        this.setState({todolist: [...this.state.todolist,obj]})
        // const todolist = this.state.todolist;
        // pushh.push(value);
        // this.setState({todolist: pushh});
        // debugger
        console.log("hello");
        axios.post('http://localhost:4000/', obj)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    deleteItem(index){
        axios.delete('http://localhost:4000/',{
            id: { indexval: index }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        console.log("index:"+index);
        var itemtodelete = this.state.todolist;
        itemtodelete.splice(index, 1);
        this.setState({todolist: itemtodelete})
    }
    
    componentWillMount(){

        // var values = [];
        // $.get("./../server.json", function(data, status){
        //     data.map(function(value, index){ 
        // values.push(value);
        // console.log(values+"values");
        // })
        // console.log("inner"+values);
        // });
        // console.log("outer"+values);
        // this.setState({todolist: values})
        // console.log("state"+this.state.todolist);
        //this.setState({todolist: values});

        axios.get('http://localhost:4000/')
        .then( (response) => {
          console.log("Response"+response.data);
          this.setState({todolist: response.data})
          console.log("inner"+this.state.todolist);
        })
        .catch(function (error) {
          //console.log(error);
        });
    }

     render(){
         console.log("state:"+ this.state.todolist);
         return (
            <div className="container">
                <div className="row">
                    <h1>Todo List</h1>
                    <AddTodo setValue={this.setValue}/>
                    <TodoItem todolist={this.state.todolist} deleteItem={this.deleteItem}/>
                </div> 
            </div>
            
         )
     }
 }

export default Todo;
 
 