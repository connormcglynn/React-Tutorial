var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');

// Module requires
var TodoItem = require('./todoitem');

// Create component
class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers']
        }
    }
    render() {
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(
                <TodoItem item={item} key={index} onDelete={this.onDelete}/>
            );
        }.bind(this));
        return(
            <div id ="todo-list">
                <p>The busiest people have the most leisure...</p>
                <ul>{todos}</ul>
            </div>
        );
    }// render

    //Custom functions
    onDelete(item) {
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
            todos: updatedTodos
        });
    };
};

// Put component into index.html
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));