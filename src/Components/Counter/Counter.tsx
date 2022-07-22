
import { useState } from 'react';
import Button from './Button';
import Herder from './Herder';

function Counter() {
  const [count, SetCount] = useState(0)
  const handleClick = (value: number) => {
    SetCount(count + value)
  }
  return (
    <div className="Counter">
      <Herder label='ssddcd'>
        <p>children of Herder</p>
        <p>children of Herder</p>
      </Herder>
      <Herder label="Counter" />
      <Herder label={`${count}`} />
      <Button label="ADD1" handleClick={() => handleClick(1)} />
      <Button label="SUB1" handleClick={() => handleClick(-1)} />
    </div>
  );
}

export default Counter;
