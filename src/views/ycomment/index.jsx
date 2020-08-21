import React, { useEffect, useState } from 'react';
import {
  Row, Col, Form, Input, Select, DatePicker, Button
} from 'antd';
import { ExclamationCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import * as style from './style';
import TableComponent from '../index/component/table';
import { loadDatas } from '@/axios/api';


const InputCom = (props) => <Input allowClear {...props} />;

const SelsectCom = (props) => {
  const { selectdata } = props;
  return (
    <Select allowClear {...props}>
      { Object.keys(selectdata).map(
        (el) => <Select.Option key={el} value={el}>{selectdata[el]}</Select.Option>
      )}
    </Select>
    );
};
SelsectCom.propTypes = {
  selectdata: PropTypes.object
};

const columns = [
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
  }
];

const { RangePicker } = DatePicker;
const selectData = {
  1: '全部',
  2: '投顾',
  3: '股市直播'
};

export default (props) => {
  const {
     pageSize = 20, current = 1, total = 100, loading = false
  } = props;

  const [data, setData] = useState([]);
  const load = async () => {
    const res = await loadDatas();
    const { data: { results } } = res;
    setData(results);
  };
  useEffect(() => {
    load();
  }, []);


  return (
    <div className={style.container}>
      <div className={style.searchBox}>
        <div className={style.searchTitle}>查询条件</div>
        <div className={style.searchContent}>
          <Form
            name="customized_form_controls"
          >
            <Row gutter={20}>
              <Col span={5}>
                <Form.Item label="评论内容">
                  <InputCom placeholder="请输入评论内容" />
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item label="评论人ID">
                  <InputCom placeholder="请输入评论人ID" />
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item label="主评论ID">
                  <InputCom placeholder="请输入主评论ID" />
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item label="评论目标">
                  <SelsectCom
                    placeholder="请选择"
                    selectdata={selectData}
                  />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item label="评论类型">
                  <SelsectCom
                    placeholder="请选择"
                    selectdata={selectData}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={20}>
              <Col span={5}>
                <Form.Item label="评论状态">
                  <SelsectCom
                    placeholder="请选择"
                    selectdata={selectData}
                  />
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item label="是否举报">
                  <SelsectCom
                    placeholder="请选择"
                    selectdata={selectData}
                  />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item label="评论时间">
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={4}>
                <div className={style.searchBtn}>
                  <Button type="primary" htmlType="submit">查询</Button>
                  <Button style={{ marginLeft: '10px' }}>重置</Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>

      <div className={style.action}>
        <Button icon={<ExclamationCircleOutlined />}>设为违规</Button>
        <Button icon={<CheckCircleOutlined />} style={{ marginLeft: '10px' }}>设为正常</Button>
      </div>
      <div className={style.result}>
        <TableComponent
          columns={columns}
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
          // onChange={this.handleTableChange}
          // scroll={{ x: 1500, y: 300 }}
          bordered
        />
      </div>
    </div>
  );
};
