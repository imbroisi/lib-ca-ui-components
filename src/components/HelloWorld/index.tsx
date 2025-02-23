import React from 'react';

export interface HelloWorldProps {
  name?: string;
}

export const HelloWorld: React.FC<HelloWorldProps> = ({ name = 'World' }) => {
  return <h1 style={{ whiteSpace: 'nowarp'}}>Hi {name}</h1>;
};
