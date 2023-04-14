import React from 'react';
import { Circle } from './circle/Shape';
import { Shape } from './shape/Shape';
import { Square } from './square/Shape';
import { Triangle } from './triangle/Shape';

const shapes: Record<PropertyKey, React.FC> = {
  Circle,
  Triangle,
  Square,
};

export default shapes;
export { Shape };
