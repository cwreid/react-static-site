import React from 'react';

let Jumbotron = React.createClass({
  getInitialState: function() {
    return {
      descriptionList: ['Avid Eater', 'Coffee Drinker', 'PS4 Gamer', 'JS Coder'],
      descriptionIndex: -1,
      description: ''
    };
  },
  componentDidMount: function() {
    this.selectDescription();
    setInterval(this.selectDescription, 2000);
  },
  selectDescription: function() {
    if (this.state.descriptionIndex < this.state.descriptionList.length - 1) {
      this.state.descriptionIndex++;
    } else {
      this.state.descriptionIndex = 0;
    }

    this.setState({
      description: this.state.descriptionList[this.state.descriptionIndex]
    });
  },
  render() {
    return(
      <div className="ui grid">
        <div className="sixteen wide column">
          <h1 className="ui center aligned header jumbotron">
            Meet Charles
          </h1>
          <h1 className="ui center aligned header">
            Charles is a <span className="faded">{this.state.description}</span>
          </h1>
        </div>
      </div>
    );
  }
});

export default Jumbotron;
