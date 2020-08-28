import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import PropTypes from 'prop-types';

const Section = (props) => {
    // const [show, setShow] = useState(false);
    const { visible, onClose } = props;
    return (
      <>
        <Drawer
          title="评论详情"
          visible={visible}
          onClose={onClose}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </>
    );
};

Section.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func
};

export default Section;
