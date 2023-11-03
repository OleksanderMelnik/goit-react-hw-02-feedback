import React, {Component} from 'react';

const ButtonGood = ({ onUpdate }) => {
  return <button onClick={onUpdate}>Good</button>;
};

const ButtonNeutral = ({ onUpdate }) => {
  return <button onClick={onUpdate}>Neutral</button>;
};

const ButtonBad = ({ onUpdate }) => {
  return <button onClick={onUpdate}>Bad</button>;
};

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  updateGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  updateNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  }
    updateBad = () => {
      this.setState(prevState => {
        return {
          bad: prevState.bad + 1,
        };
      });
    }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Please Leave feedback</h1>
        <ButtonGood onUpdate={this.updateGood} />
        <ButtonNeutral onUpdate={this.updateNeutral} />
        <ButtonBad onUpdate={this.updateBad} />
        <h2>Statistics
          good:{good}
          neutral:{neutral}
          bad:{bad}
        </h2>
      </div>
    );
  }
}
