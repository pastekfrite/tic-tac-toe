'use strict';

var React = require('react');

var boxStyle = {
    height: 100,
    width: 100,
    'background-color':'blue'
};

var Box = React.createClass({
    componentWillMount: function(){
        var old_this = this;
        this.timer = setInterval(function(){
        var oldValue = old_this.state.value;
        var newValue = oldValue === 'X' ? 'O': 'X';
        old_this.setState({
        value: newValue
        });
        }, 300);
    },
    componentWillUnmount: function(){
        clearInterval(this.timer);
    },
    getInitialState: function() {
        return {value: this.props.initialValue};
    },
    'render': function onRender () {
    return (
        <div>
            <button style={boxStyle}>{this.state.value}</button>
        </div>
    );
   }
});

React.render(<Box initialValue ={'X'}/>, document.body);