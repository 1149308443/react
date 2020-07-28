import React from 'react';
import useRequest from '@ahooksjs/use-request';
import { testOnline } from '@/axios/api';

const Ahooks = () => {
  const loadTestOnline = async () => {
    const response = await testOnline();
    console.log('testOnline请求到的数据', response);
    const { data } = response;
    const { results } = data;
    return results;
  };

  const { data = [], error, loading } = useRequest(loadTestOnline);
  console.log(data);
  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      {data.map((el) => (
        <div key={el.name}>{el.name}</div>
      ))}
    </div>
  );
};

export default Ahooks;
