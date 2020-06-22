import { useState } from 'react';

export default function useInput(initialState) {
  const [state, setState] = useState(initialState);

  const setInput = (event) => {
    setState(event.target.value);
  };

  return [state, setInput, setState];
};