var React = require('react');
var ReactDOM = require('react-dom');

// Create component
class TodoComponent extends React.Component{
    render() {
        return(
            <div>
                <p><strong>Cheese name:</strong> {this.props.cheese.name}</p>
                <p><strong>Smell factor:</strong> {this.props.cheese.smellFactor}</p>
                <p><strong>Price:</strong> {this.props.cheese.price}</p>
            </div>
        );
    }
}

var myCheese = {name: 'Camembert', smellFactor: 'extreme pong', price: '3.50'};

// Put component into index.html

ReactDOM.render(<TodoComponent mssg="I like cheese."m cheese={myCheese} />, document.getElementById('todo-wrapper'));