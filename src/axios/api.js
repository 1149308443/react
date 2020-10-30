import { get, post } from '@/axios';

export const apiTest = (params, config) => get('/api/test2', params, config);
