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
  render: function onRender () {
    var ligns = ["-","-","-"];
    //this.props.Lign;
    return (
      <div>
        {ligns.map(function(lign) {
          return <Box initialValue={lign} />
        })}
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

React.render(<Row />, document.body);
