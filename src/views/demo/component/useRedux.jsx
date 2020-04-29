import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const ColorContext = createContext({});

export const UPDATE_COLOR = 'UPDATE_COLOR';

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color;
    default:
      return state;
  }
};


export const Color = ({ children }) => {
  const [color, dispatch] = useReducer(reducer, 'blue');
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};
Color.propTypes = {
  children: PropTypes.node
};

const ShowArea = () => {
  const { color } = useContext(ColorContext);
  return <div style={{ color }}>{`字体颜色为${color}`}</div>;
};

const Buttons = () => {
  const { dispatch } = useContext(ColorContext);
  return (
    <div>
      <button onClick={() => { dispatch({ type: UPDATE_COLOR, color: 'red' }); }}> 红色</button>
      <button onClick={() => { dispatch({ type: UPDATE_COLOR, color: 'yellow' }); }}>黄色</button>
    </div>
  );
};

const Example6 = () => (
  <div>
    <Color>
      <ShowArea />
      <Buttons />
    </Color>
  </div>
);

export default Example6;
