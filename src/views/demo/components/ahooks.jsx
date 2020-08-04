import React, { useState } from 'react';
// import useRequest from '@ahooksjs/use-request';
import { useRequest } from 'ahooks';
import { Button } from 'antd';
import { testOnline } from '@/axios/api';

const Ahooks = () => {
  const [data, setData] = useState([]);
  const loadTestOnline = async (params) => {
    console.log('params', params);
    const response = await testOnline();
    console.log('testOnline请求到的数据', response);
    const { data } = response;
    const { results } = data;
    return results;
  };

  const { run, loading } = useRequest(loadTestOnline, {
    manual: true,
    // pollingInterval: 3000, // 轮询时间
    // pollingWhenHidden: false, // 在屏幕不可见时，暂时暂停定时任务
    cacheKey: 'ahooks',
    onSuccess: (result, params) => {
      console.log('success', result, params);
      setData(result);
    }
  });
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      {data.map((el) => (
        <div key={el.name}>{el.name}</div>
      ))}
      <Button onClick={() => run({ name: 'wwx' })}>useRequest</Button>
    </div>
  );
};

export default Ahooks;
