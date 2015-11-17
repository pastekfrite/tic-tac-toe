'use strict';

var React = require('react');

var boxStyle = {
    height: 100,
    width: 100,
   'background-color':'blue'
};

var Box = React.createClass({

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

React.render(<Box initialValue ='X'/>, document.body);