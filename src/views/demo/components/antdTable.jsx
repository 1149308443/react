import React, { useState } from 'react';
import { Table, Button } from 'antd';
import PropTypes from 'prop-types';

let sort = null;
let onShow = null;

const columns = [
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address'
    },
    {
        title: 'action',
        render(text, record, index) {
            return (
              <>
                <Button style={{ marginRight: '10px' }} onClick={sort}>up</Button>
                <Button onClick={() => onShow(record, index)}>查看</Button>
              </>
            );
        }
    }
  ];


const Index = (props) => {
  const { data, onShowModal } = props;
  onShow = onShowModal;
    const [arr, setArr] = useState(data);
    sort = () => {
        const newArr = [...arr];
        const current = newArr[2];
         // eslint-disable-next-line prefer-destructuring
         newArr[2] = newArr[1];
         newArr[1] = current;
         setArr(newArr);
    };
    return (
      <Table columns={columns} dataSource={arr} size="small" />
    );
};
Index.propTypes = {
  data: PropTypes.array,
  onShowModal: PropTypes.func
};
export default Index;
