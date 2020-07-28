import React from 'react';
import styles from '../styles/App.scss';

interface Props {
  count: number;
}

const App: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      <h1 className={styles.red}>Hello {props.count}</h1>
    </div>
  );
};

export default App;
