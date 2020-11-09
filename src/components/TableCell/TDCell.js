import React, { useEffect, useContext } from 'react';
import classNames from 'classnames';

import TimerContext from '../../utils/TimerContext';
import styles from './TableCell.module.scss';

const TableCell = React.memo(function Timer(props) {
  const timer = useContext(TimerContext)

  const [status, setStatus] = React.useState('');
  const [cellValue, setValue] = React.useState('');
  const [readOnly, setReadOnly] = React.useState(false);

  useEffect(() => {
    setReadOnly((props.status === 'legend'));
    setStatus((props.status === 'legend') ? 'legend' : 'tbd');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (timer.isReset === true && props.status !== 'legend') {
      setReadOnly((props.status === 'legend'));
      setStatus((props.status === 'legend') ? 'legend' : 'tbd');
      setValue('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer.isReset]);

  const parseInput = (ev) => {
    if (isNaN(ev.target.value)) {
      return;
    }
    setValue(ev.target.value);
    if (parseInt(ev.target.value) === parseInt(props.targetValue)) {
      // Only validate field before it loses focus if input is correct
      validateInput(ev);
    }
  }

  const validateInput = (ev) => {
    if (isNaN(ev.target.value)) {
      return;
    }
    if (status === 'correct') {
      // Don't mark as correct more than once
      return true;
    } else if (status !== 'correct' && parseInt(ev.target.value) === parseInt(props.targetValue)) {
      // Mark as correct
      setStatus('correct');
      setReadOnly(true);
      props.correctInput();
    } else if (ev.target.value !== '') {
      // Mark as incorrect
      setStatus('incorrect');
      setReadOnly(false);
      props.incorrectInput();
    } else {
      // Mark as empty
      setStatus('tbd');
      setReadOnly(false);
    }
  }

  return (
    <td className={styles.tableCell}>
      <input
          className={classNames(
              styles.input,
              status ? styles[status] : '',
          )}
          type={'text'}
          value={cellValue}
          onChange={parseInput}
          onBlur={validateInput}
          readOnly={readOnly}
      />
    </td>
  );
});

export { TableCell };
export default TableCell;
