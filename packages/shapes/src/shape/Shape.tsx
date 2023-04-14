import React from 'react';
import './Shape.css';

export interface ShapeProps {
  sides: number;
}
export const Shape: React.FC<ShapeProps> = ({ sides }) => {
  return (
    <div id="shape" style={{ '--number-of-sides-input': sides }}>
      <RecursiveDivs remaining={50} />
    </div>
  );
};

interface RecursiveDivsProps {
  remaining: number;
}
const RecursiveDivs: React.FC<RecursiveDivsProps> = ({ remaining }) => {
  if (remaining === 0) return <></>;
  return (
    <div>
      <RecursiveDivs remaining={remaining - 1} />
    </div>
  );
};
