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
                <li>{item}</li>
            );
        });
        return(
            <div id ="todo-list">
                <p>The busiest people have the most leisure...</p>
                <p>{this.state.age}</p>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }// render
}



// Put component into index.html

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));