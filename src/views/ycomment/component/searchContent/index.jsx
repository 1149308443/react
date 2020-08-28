import React from 'react';
import {
    Row, Col, Form, Input, Select, DatePicker, Button
} from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';

// 封装的input组件
const InputCom = (props) => <Input allowClear {...props} />;
// 封装的select组件
const SelsectCom = (props) => {
    const { selectdata } = props;
    return (
      <Select allowClear {...props}>
        {Object.keys(selectdata).map(
                (el) => <Select.Option key={el} value={el}>{selectdata[el]}</Select.Option>
            )}
      </Select>
    );
};
SelsectCom.propTypes = {
    selectdata: PropTypes.object
};
const { RangePicker } = DatePicker;

const selectData = {
    1: '全部',
    2: '投顾',
    3: '股市直播'
};


const SearchContent = () => {
    const [searchConditions] = Form.useForm();

    // 点击查询
    const onFinish = (data) => {
      console.log(data);
      if (data.time) {
        data.timeCeiling = moment(data.time[1]).valueOf();
        data.timeflow = moment(data.time[0]).valueOf();
      }
    };
    // 点击重置
    const onReset = () => {
      searchConditions.resetFields();
    };
    return (
      <>
        <Form
          name="searchConditions"
          form={searchConditions}
          onFinish={onFinish}
        >
          <Row gutter={20}>
            <Col span={5}>
              <Form.Item label="评论内容" name="content">
                <InputCom placeholder="请输入评论内容" />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="评论人ID" name="peopleID">
                <InputCom placeholder="请输入评论人ID" />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="主评论ID" name="id">
                <InputCom placeholder="请输入主评论ID" />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="评论目标" name="target">
                <SelsectCom
                  placeholder="请选择"
                  selectdata={selectData}
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="评论类型" name="type">
                <SelsectCom
                  placeholder="请选择"
                  selectdata={selectData}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={20}>
            <Col span={5}>
              <Form.Item label="评论状态" name="status">
                <SelsectCom
                  placeholder="请选择"
                  selectdata={selectData}
                />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="是否举报" name="isReport">
                <SelsectCom
                  placeholder="请选择"
                  selectdata={selectData}
                />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item label="评论时间" name="time">
                <RangePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <div style={{ paddingTop: '32px' }}>
                <Button type="primary" htmlType="submit">查询</Button>
                <Button style={{ marginLeft: '10px' }} onClick={onReset}>重置</Button>
              </div>
            </Col>
          </Row>
        </Form>
      </>
    );
};
export default SearchContent;
