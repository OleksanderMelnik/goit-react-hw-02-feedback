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

    countTotalFeedback = () => {
      // console.log(Object.values(this.state));
      return Object.values(this.state).reduce((total, number) => (total += number));
    };

    
  
    countPositiveFeedbackPercentage = (totalFeedback) => {
      const { good } = this.state;

      if (totalFeedback > 0) return Math.round(good * 100 / totalFeedback);
      return 0;
    };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage(totalFeedback);

    return (
      <div>
        <h1>Please Leave feedback</h1>
        <ButtonGood onUpdate={this.updateGood} />
        <ButtonNeutral onUpdate={this.updateNeutral} />
        <ButtonBad onUpdate={this.updateBad} />
        <h2>Statistics
          Good:{good}
          Neutral:{neutral}
          Bad:{bad}
          Total:{totalFeedback}
          Positive feedback:{positiveFeedback}%
        </h2>
      </div>
    );
  }
}
