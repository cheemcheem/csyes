import React, { useLayoutEffect } from 'react';
import { Panel, StackLayout, useTheme } from '@salt-ds/core';
import { Heading } from './components/Heading';
import { Shapes } from './components/Shapes';

function App(): JSX.Element {
  const { mode } = useTheme();
  useLayoutEffect(() => {
    if (mode === 'dark') {
      document.body.style.background =
        'var(--salt-container-primary-background)';
    }
  }, [mode]);

  return (
    <Panel>
      <StackLayout>
        <Heading />
        <Shapes />
      </StackLayout>
    </Panel>
  );
}

export default App;
