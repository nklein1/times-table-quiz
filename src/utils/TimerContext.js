import React, { Component } from 'react';

const TimerContext = React.createContext();

class TimerProvider extends Component {
  // Context state
  state = {
    isReset: false,
    isRunning: false,
    isComplete: false
  };

  // Method to update isReset state
  setIfReset = (newResetState) => {
    if (newResetState !== this.state.isReset) {
      this.setState((prevState) => ({ isReset: newResetState }));
    }
    this.setIfComplete(false);
  }

  // Method to update isRunning (and isReset when appropriate) states
  setIfRunning = (newRunState) => {
    if (newRunState !== this.state.isRunning) {
      this.setState((prevState) => ({ isRunning: newRunState }));
      if (newRunState === true) {
        this.setIfReset(false);
      }
    }
  }

  // Method to update isComplete state
  setIfComplete = (newCompleteState) => {
    if (newCompleteState !== this.state.isComplete ) {
      this.setState((prevState) => ({ isComplete: newCompleteState }));
    }
  }

  render() {
    const { children } = this.props;
    const {
      isReset,
      isRunning,
      isComplete
    } = this.state;
    const {
      setIfReset,
      setIfRunning,
      setIfComplete
    } = this;

    return (
      <TimerContext.Provider
        value={{
          isReset,
          isRunning,
          isComplete,
          setIfReset,
          setIfRunning,
          setIfComplete,
        }}
      >
        {children}
      </TimerContext.Provider>
    )
  }
}

export default TimerContext

export { TimerProvider }
