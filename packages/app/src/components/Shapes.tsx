import React, { useState } from 'react';
import ShapeComponents, { Shape } from '@csyes/shapes';
import { Card, FlowLayout, Panel, StackLayout, Text } from '@salt-ds/core';
import { Slider } from '@salt-ds/lab';

export const Shapes: React.FC = () => {
  const [slider, setSlider] = useState(3);
  return (
    <Panel>
      <FlowLayout>
        {Object.entries(ShapeComponents).map(([ComponentName, Component]) => (
          <Card key={ComponentName} style={{ width: 200 }}>
            <StackLayout gap={2}>
              <Component />
              <Text styleAs="h2">{ComponentName}</Text>
            </StackLayout>
          </Card>
        ))}
        <Card>
          <StackLayout gap={2}>
            <Shape sides={slider} />
            <Text styleAs="h2">{slider} sided shape</Text>
            <Slider
              min={3}
              max={50}
              label="Sides"
              marks={[3, 5, 10, 15, 20, 25]}
              value={slider}
              onChange={(number) =>
                typeof number === 'number' && setSlider(number)
              }
            />
          </StackLayout>
        </Card>
      </FlowLayout>
    </Panel>
  );
};
