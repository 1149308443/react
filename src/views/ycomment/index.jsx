import React, { useEffect, useState } from 'react';
import { Button, message as MessageHint, Modal } from 'antd';
import { ExclamationCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadData, setModuleState } from './action';
// import { bindActionCreators } from 'redux';
// import * as actions from './action';
import * as style from './style';
import TableComponent from '../index/component/table';
import SearchContent from './component/searchContent';
import Section from './component/section';
import { loadDatas } from '@/axios/api';

const { confirm } = Modal;

const columns = [
  {
    title: '评论内容',
    fixed: 'left',
    dataIndex: 'name',
    width: '10%'
  },
  {
    title: '评论目标',
    dataIndex: 'serviceType',
    width: '12%'
  },
  {
    title: '评论状态',
    dataIndex: 'msgType',
    width: '10%'
  },
  {
    title: '评论类型',
    dataIndex: 'context',
    width: '20%'
  },
  {
    title: '举报数',
    dataIndex: 'time',
    width: '20%'
  },
  {
    title: '点赞数',
    dataIndex: 'status',
    width: '10%'
  },
  {
    title: '评论数',
    dataIndex: 'status',
    width: '10%'
  },
  {
    title: '评论人ID',
    dataIndex: 'time',
    width: '20%'
  },
  {
    title: '评论时间',
    dataIndex: 'time',
    width: '20%'
  }
];
 const Index = (props) => {
  const {
     pageSize = 10, current = 1, total = 14, loading = false, loadData, setModuleState
  } = props;

  const [data, setData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); // 全选选中的项
  const [showSection, setShowSection] = useState(false); // 是否展示抽屉栏
  const load = async () => {
    const res = await loadDatas();
    const { data: { results } } = res;
    setData(results);
  };
  useEffect(() => {
    load(); // mockJSON
    loadData(); // saga
  }, []);

  // 设置表格全选
  const rowSelection = {
    selectedRowKeys,
    onChange: (data) => {
      console.log(data);
      setSelectedRowKeys(data);
    }
  };
  // 点击表格分页
  const handleTableChange = (pagination) => {
    setModuleState({
      current: pagination.current,
      pageSize: pagination.pageSize
    });
    loadData(); // saga
  };

  /**
   * 点击设置评论状态函数
   * @param {number} 0 表示设为正常 1 表示设为违规
   * */
  const setCommentStatus = (type) => {
    if (selectedRowKeys.length === 0) {
      MessageHint.error('请选择要处理的项');
      return;
    }
    const content = type ? `确定要将这${selectedRowKeys.length}条评论设为违规?` : `确定要将这${selectedRowKeys.length}条评论设为正常?`;
    const okText = type ? '设为违规' : '设为正常';
    confirm({
      content,
      okText,
      okButtonProps: { danger: type },
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  };

  // 点击每一行弹出抽屉栏
  const onTableRowClick = (record) => {
    console.log('点击行', record);
    setShowSection(true);
  };
  // 关闭抽屉栏
  const onCloseSection = () => {
    setShowSection(false);
  };

  return (
    <>
      <Section visible={showSection} onClose={onCloseSection} />
      <div className={style.container}>
        <div className={style.searchBox}>
          <div className={style.searchTitle}>查询条件</div>
          <div className={style.searchContent}>
            <SearchContent />
          </div>
        </div>

        <div className={style.action}>
          <Button onClick={() => setCommentStatus(1)} icon={<ExclamationCircleOutlined />}>设为违规</Button>
          <Button onClick={() => setCommentStatus(0)} icon={<CheckCircleOutlined />} style={{ marginLeft: '10px' }}>设为正常</Button>
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
            onChange={handleTableChange}
            bordered
            rowSelection={rowSelection}
            onRow={(record) => ({
              onClick: () => {
                onTableRowClick(record);
              }
            })}
          />
        </div>
      </div>
    </>
  );
};

Index.propTypes = {
  pageSize: PropTypes.number,
  current: PropTypes.number,
  total: PropTypes.number,
  loading: PropTypes.bool,
  loadData: PropTypes.func,
  setModuleState: PropTypes.func
};

const mapStateToProps = (state) => ({ ...state.module.ycomment });
const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(loadData()),
  setModuleState: (payload) => dispatch(setModuleState(payload))
});
// const mapDispatchToProps = (dispatch) => ({ actionAll: bindActionCreators(actions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(Index);
