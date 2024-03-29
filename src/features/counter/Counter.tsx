import React, { useState } from 'react';
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  makeIncrementIfOdd,
  selectCount,
} from './counterSlice';
import { getClasses } from './Counter.style';

interface CounterProps {}

const Counter: React.FC<CounterProps> = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const theme = useTheme();
  const classes = getClasses({}, theme);
  const { t } = useTranslation('features/Counter');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div css={classes.root}>
      <div css={classes.row}>
        <button
          type="button"
          css={classes.button()}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span css={classes.value}>{count}</span>
        <button
          type="button"
          css={classes.button()}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div css={classes.row}>
        <input
          css={classes.textBox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          type="button"
          css={classes.button()}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          {t('addAmount')}
        </button>
        <button
          type="button"
          css={classes.button({ isAsync: true })}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          {t('addAsync')}
        </button>
        <button
          type="button"
          css={classes.button()}
          onClick={() => dispatch(makeIncrementIfOdd(incrementValue))}
        >
          {t('addIfOdd')}
        </button>
      </div>
    </div>
  );
};

export type { CounterProps };

export { Counter };
