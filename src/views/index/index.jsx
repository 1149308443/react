import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Form, Input, Select, Button, Table
} from 'antd';
import style from './style.scss';
import { loadData, submit, addSend } from './action';
import { getData } from '@/axios';
import ModalBox from './component/modal';
import ModalRow from './component/modalRow';
import server, { loadDatas } from '@/axios/api';

const { Option } = Select;

const getRandomuserParams = (params) => ({
    results: params.pagination.pageSize,
    page: params.pagination.current,
    ...params
  });

@connect(
  (state) => ({
    ...state.module.index
  }), {
    loadData: loadData.request,
    submit: submit.request,
    addSend: addSend.request
  }
)
class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '操作人',
        dataIndex: 'name',
        width: '10%'
      },
      {
        title: '服务类型',
        dataIndex: 'serviceType',
        width: '12%'
      },
      {
        title: '消息类型',
        dataIndex: 'msgType',
        width: '10%'
      },
      {
        title: '发送内容',
        dataIndex: 'context',
        width: '20%'
      },
      {
        title: '创建时间',
        dataIndex: 'time',
        width: '20%'
      },
      {
        title: '审核转态',
        dataIndex: 'status',
        width: '10%'
      },
      {
        title: '审核理由',
        dataIndex: 'status',
        width: '10%'
      },
      {
        title: '审核时间',
        dataIndex: 'time',
        width: '20%'
      },
      {
        title: '发送状态',
        dataIndex: 'status',
        width: '10%'
      },
      {
        title: '发送时间',
        dataIndex: 'time',
        width: '20%'
      },
      {
        title: '操作',
        dataIndex: 'action',
        width: '20%',
        render: (text, record) => (
          <span>
            <a style={{ marginRight: 16 }}>查看推送名单</a>
            <a className="ant-dropdown-link" onClick={() => this.showRowModal(record)}>
                  查看
            </a>
          </span>
            )
      }
    ];
    this.state = {
      data: [],
      pagination: {
        current: 1,
        pageSize: 10
      },
      loading: false,
      visibleRow: false,
      rowData: {}
    };
  }

  componentDidMount() {
    const { loadData, addSend, submit } = this.props;
    loadData();
    addSend();
    submit();
    const xxx = loadDatas();
    console.log(xxx);
    const { pagination } = this.state;
    this.fetch({ pagination });
  }

  // 点击表格分页
  handleTableChange = (pagination) => {
    this.fetch({
      pagination
    });
  };

  // 拉取表格数据
  fetch = (params = {}) => {
    this.setState({ loading: true });
    getData(
      // 'https://randomuser.me/api',
      // '/api/api',
      // server.server,
      '/api2/static/mock.json',
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

  // 点击查询
   onFinish = (data) => {
     console.log(data);
   };

   // 点击表格每一行查看
   showRowModal = (data) => {
    console.log(data);
    this.setState({
      visibleRow: true,
      rowData: data
    });
  };

  // 取消查看弹窗
  channelRowModal = () => {
    this.setState({
      visibleRow: false
    });
  }


   render() {
    const {
    data, pagination, loading, visibleRow, rowData
    } = this.state;
     return (
       <div className={style.container}>
         <ModalRow
           visibleRow={visibleRow}
           handleRowCancel={this.channelRowModal}
           data={rowData}
         />
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
             columns={this.columns}
             rowKey={(record) => record.login.uuid}
             dataSource={data}
             pagination={pagination}
             loading={loading}
             onChange={this.handleTableChange}
             scroll={{ x: 1500, y: 800 }}
             bordered
           />
         </div>
       </div>
     );
   }
}
Index.propTypes = {
  loadData: PropTypes.func,
  submit: PropTypes.func,
  addSend: PropTypes.func
};
export default Index;
