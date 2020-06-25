import { useState } from 'react';


export default function useInput(initialState) {
   const [state, setState] = useState(initialState);

   const setInput = e => {
      setState(e.target.value);
   }

   return [state, setInput, setState];
}