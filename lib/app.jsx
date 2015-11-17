'use strict';

var React = require('react');

var boxStyle = {
    height: 100,
    width: 100,
    'background-color':'blue'
};

var timerValue=300;


var Box = React.createClass({

    handleClick: function(){
        var oldValue = this.state.value;
        var newValue = oldValue === 'X' ? 'O': 'X';
        this.setState({
        value: newValue
        });
    },

    getInitialState: function() {
        return {value: this.props.initialValue};
    },
    'render': function onRender () {
    return (
        <div>
            <button style={boxStyle} onClick={this.handleClick}>{this.state.value}</button>
        </div>
    );
   }
});

React.render(<Box initialValue ={'X'}/>, document.body);