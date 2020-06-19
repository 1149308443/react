import React, { useEffect, useState, useRef } from 'react';
import style from './style';
import Typing from '@/utils/writingUtil';


const TypeWriter = () => {
  const [str, setStr] = useState(null);
  const source = useRef();
  const output = useRef();
  let timer = null;
  let i = 0;
  const temp = '用JS实现动态打字效果';

  const func = () => {
    if (i <= temp.length) {
      timer = setTimeout(func, 500);
      setStr(`${temp.slice(0, i += 1)}_`);
    } else {
      setStr(temp);// 结束打字,移除 _ 光标
      clearTimeout(timer);
    }
  };
  useEffect(() => {
    func();
    const typing = new Typing({
      source: source.current,
      output: output.current
    });
    typing.start();
  }, []);
  // useEffect(() => {
  //   let i = 1;
  //   while (true) {
  //     i += 1;
  //     console.log(i);
  //     if (i > 100) {
  //       return;
  //     }
  //   }
  // }, []);
  return (
    <>
      <div className={style.print}>以下是几行css实现打字效果</div>
      <div>{str}</div>

      <div ref={source}>
        打印带有标签的段落
        <p className={style.text}>我是段落</p>
        <ul>
          <li>列表1</li>
          <li>列表2</li>
          <li>列表3</li>
        </ul>
      </div>
      <div style={{ height: '50px' }} />
      <div ref={output} />
    </>
  );
};
export default TypeWriter;
