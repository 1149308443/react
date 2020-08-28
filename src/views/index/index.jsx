import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Form, Input, Select, Button, Table, DatePicker
} from 'antd';
import style from './style';
import {
  loadData, submit, addSend, setModuleState
} from './action';
import ModalBox from './component/modal';
import ModalRow from './component/modalRow';
import TableComponent from './component/table';
import { setCookie } from '@/utils/cookieUtil';

const { Option } = Select;

const defaultSize = 10;

const { RangePicker } = DatePicker;

@connect(
  (state) => ({
    ...state.module.index
  }), {
  setModuleState,
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
        fixed: 'left',
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
        fixed: 'right',
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
      visibleRow: false,
      rowData: {}
    };
  }

  componentDidMount() {
    const { loadData, addSend, submit } = this.props;
    // addSend();
    setTimeout(() => { addSend(); }, 5000); // 原本预计5s之后取消定时任务
    submit();
    setCookie(' ycas_token', 'wwx');
    loadData();
    // this.polling();// 利用setTimeout递归实现轮询写法
  }

  polling = () => {
    setTimeout(() => { this.getDataPolling(this.polling); }, 1000);
  }

  getDataPolling = (cb) => {
    console.log(1);
    cb();
  }

  // 点击表格分页
  handleTableChange = (pagination) => {
    const { setModuleState, loadData } = this.props;
    setModuleState({
      current: pagination.current,
      pageSize: pagination.pageSize
    });
    loadData();
  };

  // 点击查询
  onFinish = (data) => {
    console.log(data);
    if (data.time) {
      // 开始时间 时间戳 毫秒
      console.log(moment(data.time[0]).valueOf());
    }
    const { setModuleState, loadData } = this.props;
    setModuleState({
      current: 1,
      pageSize: defaultSize,
      conditions: data
    });
    loadData();
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


  // 日期选择 限制
  disabledDate = (current) => current > moment().endOf('day')

  render() {
    const {
      visibleRow, rowData
    } = this.state;
    const {
      data, pageSize = defaultSize, current = 1, total = 100, loading, setModuleState
    } = this.props;
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
            <Form.Item
              name="time"
              label="选择时间"
            >
              <RangePicker
                disabledDate={this.disabledDate}
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
          <ModalBox setStore={setModuleState} />
        </div>
        <div className={style.searchResult}>
          <TableComponent
            columns={this.columns}
            rowKey={(record) => record.login.uuid}
            dataSource={data}
            pagination={{
              pageSize,
              current,
              total,
              showSizeChanger: true,
              showTotal: (total, range) => `当前展示${range[0]}-${range[1]}条, 总共 ${total} 条`
            }}
            loading={loading}
            onChange={this.handleTableChange}
            // scroll={{ x: 1500, y: 300 }}
            bordered
          />
        </div>
      </div>
    );
  }
}
Index.propTypes = {
  loadData: PropTypes.func,
  setModuleState: PropTypes.func,
  data: PropTypes.object,
  pageSize: PropTypes.number,
  current: PropTypes.number,
  total: PropTypes.number,
  loading: PropTypes.bool,

  submit: PropTypes.func,
  addSend: PropTypes.func
};
export default Index;
