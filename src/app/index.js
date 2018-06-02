var React = require('react');
var ReactDOM = require('react-dom');

// Create component
class TodoComponent extends React.Component{
    render() {
        return(
            <h1>Hello ninjas!</h1>
        );
    }
}

// Put component into index.html

ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));