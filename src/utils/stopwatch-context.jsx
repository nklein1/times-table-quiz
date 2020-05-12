import React from 'react';

export const stopwatch = {
  seconds: '00',
  minutes: '00',
  hours: '',
  finishedCells: 0,
  totalCells: 0,
  tableSize: 3, // TEMP: return to 12 after dev complete
  isRunning: false,
  isComplete: false
};

export const StopwatchContext = React.createContext({
  stopwatch,
  initTimer: () => {},
  startTimer: () => {},
  stopTimer: () => {},
  completeTable: () => {},
  resetTable: () => {},
  resizeTable: () => {}
});