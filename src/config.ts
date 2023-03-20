export default {
  // 默认配置，不同环境配置不同的IP
  // default: {
  //   appId: '1230',
  //   baseURL: 'http://127.0.0.1',
  // },
  development: {
    appId: '1231',
    baseURL: 'http://127.0.0.2',
    mock: false
  },
  test: {
    appId: '456',
    baseURL: 'http://127.0.0.3',
  },
  production: {
    appId: '567',
    baseURL: 'http://127.0.0.4',
  },
};
