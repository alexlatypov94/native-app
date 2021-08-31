import {useState} from 'react';
export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChangeText = (newValue: string) => {
    setValue(newValue);
  };

  return {
    value,
    onChangeText,
  };
};
