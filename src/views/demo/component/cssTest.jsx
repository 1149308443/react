import React from 'react';
import * as style from '../style';

const CssDemo = () => (
  <div className={style.cssDemo}>
    <div className={style.triangle}>
      <div className={style.triangleBorder} />
      <div className={style.linearGradient} />
      <div className={style.font}>&#9660;</div>
      <div className={style.out}>
        <div className={style.inner} />
      </div>
      <div className={style.clipPath} />
    </div>

    <div className={style.sequl}>
      <div className={style.sequlInner} />
    </div>
  </div>
);

export default CssDemo;
