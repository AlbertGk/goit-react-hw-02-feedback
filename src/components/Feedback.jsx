import { Component } from 'react';

class Feedback extends Component {
  static defaultProps = {
    mark: 1,
  };

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseGoodMark = ev => {
    this.setState((state, props) => ({
      good: state.good + props.mark,
    }));
  };

  increaseNeutralMark = ev => {
    this.setState((state, props) => ({
      neutral: state.neutral + props.mark,
    }));
  };

  increaseBadMark = ev => {
    this.setState((state, props) => ({
      bad: state.bad + props.mark,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (100 * this.state.good) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.increaseGoodMark}>
            Good
          </button>
          <button type="button" onClick={this.increaseNeutralMark}>
            Neutral
          </button>
          <button type="button" onClick={this.increaseBadMark}>
            Bad
          </button>
        </div>
        <h1>Statistics</h1>
        <div>
          <p>Good:{good}</p>
          <p>Neutral:{neutral}</p>
          <p>Bad:{bad}</p>
          <p>Total:{this.countTotalFeedback()}</p>
          <p>Positive feedback:{this.countPositiveFeedbackPercentage()? this.countPositiveFeedbackPercentage() : 0}%</p>
        </div>
      </>
    );
  }
}

export default Feedback;
