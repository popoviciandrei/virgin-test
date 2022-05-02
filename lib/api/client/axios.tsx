import axios from 'axios';
import https from 'https';

const DEFAULT_TIMEOUT = 200000;

export const virginCSApi = axios.create({
  baseURL: process.env.URL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: DEFAULT_TIMEOUT,
});
