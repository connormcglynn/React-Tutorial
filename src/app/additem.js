var React = require('react');
require('./css/addItem.css');

class AddItem extends React.Component{
    render(){
        return (
            <form id="add-todo" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" required ref={(input) => {this.newItem = input; }} />
                <input type="submit" value="Hit me" />
            </form>
        );
    }

    //Custom functions

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.newItem.value);
    }
};

module.exports = AddItem;