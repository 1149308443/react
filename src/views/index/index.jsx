import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Form, Input, Select, Button, Table
} from 'antd';
import style from './style.scss';
import { loadData } from './action';
import { getData } from '@/axios';
import ModalBox from './component/modal';


const { Option } = Select;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (name) => `${name.first} ${name.last}`,
    width: '10%'
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    width: '10%'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: '20%'
  },
  {
    title: 'phone',
    dataIndex: 'phone',
    width: '20%'
  },
  {
    title: '操作',
    dataIndex: 'action',
    render: (text, record, i) => {
      console.log(text, record, i);
      return (
        <span>
          <a style={{ marginRight: 16 }}>查看推送名单</a>
          <a className="ant-dropdown-link">
              查看
          </a>
        </span>
        );
    }
  }
];

const getRandomuserParams = (params) => ({
    results: params.pagination.pageSize,
    page: params.pagination.current,
    ...params
  });

@connect(
  (state) => ({
    ...state.module.index
  }), {
    loadData
  }
)
class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pagination: {
        current: 1,
        pageSize: 10
      },
      loading: false
    };
  }

  componentDidMount() {
    // const { loadData } = this.props;
    // loadData();
    const { pagination } = this.state;
    this.fetch({ pagination });
  }

  handleTableChange = (pagination) => {
    this.fetch({
      pagination
    });
  };

  fetch = (params = {}) => {
    this.setState({ loading: true });
    getData(
      'https://randomuser.me/api',
      getRandomuserParams(params)
    ).then((data) => {
      console.log(data);
      this.setState({
        loading: false,
        data: data.results,
        pagination: {
          ...params.pagination,
          total: 200
          // total: data.totalCount,
        }
      });
    });
  };

   onFinish = (data) => {
     console.log(data);
   };

   render() {
    const {
    data, pagination, loading
    } = this.state;
     return (
       <div className={style.container}>
         <div className={style.searchBar}>
           <Form
             name="customized_form_controls"
             layout="inline"
             onFinish={this.onFinish}
           >
             <Form.Item
               name="people"
               label="操作人"
             >
               <Input
                 type="text"
                 placeholder="请输入操作人"
                 style={{
                   width: 150
                 }}
               />
             </Form.Item>
             <Form.Item
               name="msgType"
               label="消息类型"
             >
               <Select
                 placeholder="请选择"
                 allowClear
               >
                 <Option value="male">male</Option>
                 <Option value="female">female</Option>
                 <Option value="other">other</Option>
               </Select>
             </Form.Item>
             <Form.Item
               name="status"
               label="审核状态"
             >
               <Select
                 placeholder="请选择"
                 allowClear
               >
                 <Option value="0">待审和</Option>
                 <Option value="1">已审核</Option>
                 <Option value="2">审核中</Option>
               </Select>
             </Form.Item>
             <Form.Item
               name="sendStatus"
               label="发送状态"
             >
               <Select
                 placeholder="请选择"
                 allowClear
               >
                 <Option value="0">发送失败</Option>
                 <Option value="1">发送成功</Option>
                 <Option value="2">发送中</Option>
               </Select>
             </Form.Item>
             <Form.Item>
               <Button type="primary" htmlType="submit">
                查询
               </Button>
             </Form.Item>
           </Form>
         </div>
         <div className={style.btnGroup}>
           <ModalBox />
         </div>
         <div className={style.searchResult}>
           <Table
             columns={columns}
             rowKey={(record) => record.login.uuid}
             dataSource={data}
             pagination={pagination}
             loading={loading}
             onChange={this.handleTableChange}
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
