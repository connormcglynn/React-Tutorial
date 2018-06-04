var React = require('react');
var ReactDOM = require('react-dom');

// Create component
class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers']
        }
    }
    render() {
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(
                <TodoItem item={item} key={index}/>
            );
        });
        return(
            <div id ="todo-list">
                <p>The busiest people have the most leisure...</p>
                <ul>{todos}</ul>
            </div>
        );
    }// render
};

//Create TodoItem component
class TodoItem extends React.Component{
    render(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                </div>
            </li>
        )
    }
}

// Put component into index.html
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));