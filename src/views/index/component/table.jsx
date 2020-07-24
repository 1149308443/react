import React, { useRef } from 'react';
import { useSize } from 'ahooks';
import { Table } from 'antd';

const TableComponent = (props) => {
    const ref = useRef();
    const size = useSize(ref);
    return (
      <div style={{ width: '100%', height: '100%' }} ref={ref}>
        <Table {...props} scroll={{ x: 1500, y: size.height - 110 || 0 }} />
      </div>
    );
};

export default TableComponent;
