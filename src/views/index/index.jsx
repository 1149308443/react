import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Form, Input, Select, Button, Table, Tag, Space
} from 'antd';
import style from './style.scss';
import { loadData } from './action';


const { Option } = Select;

const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {}
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, row, index) => {
      if (index < 4) {
        return <a>{text}</a>;
      }
      return {
        children: <a>{text}</a>,
        props: {
          colSpan: 5
        }
      };
    }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    render: renderContent
  },
  {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {}
      };
      if (index === 2) {
        obj.props.rowSpan = 2;
      }
      // These two are merged into above cell
      if (index === 3) {
        obj.props.rowSpan = 0;
      }
      if (index === 4) {
        obj.props.colSpan = 0;
      }
      return obj;
    }
  },
  {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
    render: renderContent
  },
  {
    title: 'Address',
    dataIndex: 'address',
    render: renderContent
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park'
  }
];

@connect(
  (state) => ({
    ...state.module.index
  }), {
    loadData
  }
)
class Index extends PureComponent {
  componentDidMount() {
    const { loadData } = this.props;
    loadData();
  }

   onFinish = (data) => {
     console.log(data);
   };

   render() {
     return (
       <div className={style.container}>
         <div className={style.searchBar}>
           <Form
             name="customized_form_controls"
             layout="inline"
             onFinish={this.onFinish}
            //  initialValues={{
            //    price: {
            //      number: 0,
            //      currency: 'rmb'
            //    }
            //  }}
           >
             <Form.Item
               name="people"
               label="操作人"
             >
               <Input
                 type="text"
                 style={{
                   width: 100
                 }}
               />
             </Form.Item>
             <Form.Item
               name="msgType"
               label="消息类型"
             >
               <Input
                 type="text"
                 style={{
                   width: 100
                 }}
               />
             </Form.Item>
             <Form.Item
               name="status"
               label="审核状态"
             >
               <Input
                 type="text"
                 style={{
                   width: 100
                 }}
               />
             </Form.Item>
             <Form.Item
               name="sendStatus"
               label="发送状态"
             >
               <Input
                 type="text"
                 style={{
                   width: 100
                 }}
               />
             </Form.Item>
             <Form.Item>
               <Button type="primary" htmlType="submit">
                查询
               </Button>
             </Form.Item>
           </Form>
         </div>
         <div className={style.btnGroup}>
           <Button type="primary">消息群推(个人)</Button>
           <Button type="primary">消息群推(团体)</Button>
         </div>
         <div className={style.searchResult}>
           <Table
             columns={columns}
             dataSource={data}
             pagination={{ pageSize: 2 }}
             scroll={{ x: 1200, y: 300 }}
             bordered
           />
         </div>
       </div>
     );
   }
}
Index.propTypes = {
  loadData: PropTypes.func
};
export default Index;
