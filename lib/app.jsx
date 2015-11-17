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
var Row = React.createClass({
  handleClick : function(index) {
    childData.updateState();
  },
  render: function onRender () {
    var ligns = this.props.ligns;
    return (
      <div>
      {
          ligns.map(function(lign, index) {
            return <Box initialValue={lign} index={index} onClick={this.handleClick} />
          }.bind(this))
      }
      </div>
    );
  }
});

var Grid = React.createClass({
  render: function onRender () {
    return (
      <div>
        <Row initialValue="-" />
        <Row initialValue="-" />
        <Row initialValue="-" />
      </div>
    );
  }
});

React.render(<Grid/>, document.body);
