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
var Rows = React.createClass({
  render: function onRender () {
    return (
      <div>
        <Box initialValue="0" />
        <Box initialValue="1" />
        <Box initialValue="0" />
      </div>
    );
  }
});



React.render(<Rows/>, document.body);

