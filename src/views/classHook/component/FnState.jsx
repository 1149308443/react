import React, { useState, useEffect, useRef } from 'react';

// const obj = {}; //声明一个变量可以绕过捕获机制
function MessageThread() {
  const [message, setMessage] = useState('');
  //   const obj = useRef();
  const showMessage = () => {
    console.log('alert', message);
    alert(`You said: ${message}`);
    // alert(obj.name);
  };

  const handleSendClick = () => {
    setTimeout(showMessage, 3000);
  };
  //   useEffect(() => {
  //     obj.name = message;
  //   });

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    console.log('inputchange', message);
    // obj.name = e.target.value;
  };

  return (
    <>
      <input value={message} onChange={handleMessageChange} />
      <button onClick={handleSendClick}>Send</button>
    </>
  );
}

export default MessageThread;
