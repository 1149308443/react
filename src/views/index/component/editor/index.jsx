import React, { useState } from 'react';
// import './App.css';

const App = () => {
  const [value, setValue] = useState('');

  const getAnchorPos = () => {
    const anchor = window.getSelection().getRangeAt(0);
    console.log('anchor', { ...anchor }, anchor.endOffset);
    return anchor.endOffset;
  };


  const addA = () => {
    // setValue(val => (`${val}<a href="http://www.baidu.com">baidu</a>`));
    const a = document.createElement('a');
    a.href = 'http://www.baidu.com';
    a.innerHTML = 'baidu';
    document.querySelector('.inputer').appendChild(a);
    const inner = document.querySelector('.inputer').innerHTML;
    const pos = getAnchorPos();
    console.log('inner', inner, pos);
  };

  const submit = () => {
    const value = document.querySelector('.inputer').innerHTML;
    console.log('submit', value);
  };

  return (
    <div className="App">
      <div className="inputer" contentEditable="true" />
      <span onClick={addA}>
        {' add<a>'}
      </span>
      <span onClick={submit}>submit</span>
    </div>
  );
};

export default App;
