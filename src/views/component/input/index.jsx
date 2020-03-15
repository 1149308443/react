import React from 'react';
import PropType from 'prop-types';
import * as style from './style.scss';

const RenderInput = ({
  input,
  placeholder,
  type,
  disabled,
  invalidClass,
  tip,
  inline
}) => (
  <div
    className={!tip ? '' : invalidClass}
    data-tip={tip}
    style={{ display: inline ? 'inline' : 'block' }}
  >
    <input
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...input}
      type={type || 'text'}
      placeholder={placeholder}
      disabled={disabled}
      autoComplete="off"
    />
  </div>
);

RenderInput.propTypes = {
  input: PropType.any,
  placeholder: PropType.string,
  type: PropType.string,
  disabled: PropType.bool,
  invalidClass: PropType.string,
  tip: PropType.string,
  inline: PropType.bool
};

export default RenderInput;
