import { useState, useCallback } from 'react';

export function useButtonPressEager(onPress) {
  const [pressed, setPressed] = useState(false);

  const onPressIn = useCallback(() => {
    setPressed(true);
    onPress();
  }, [onPress]);

  const onPressOut = useCallback(() => {
    setPressed(false);
  }, []);

  return [pressed, onPressIn, onPressOut];
}
