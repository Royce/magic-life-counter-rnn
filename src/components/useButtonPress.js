import { useCallback, useState } from 'react';

export function useButtonPress(onPress) {
  const [pressed, setPressed] = useState(false);

  const onPressIn = useCallback(() => {
    setPressed(true);
  }, []);

  const onPressOut = useCallback(() => {
    setPressed(false);
    onPress();
  }, [onPress]);

  return [pressed, onPressIn, onPressOut];
}
