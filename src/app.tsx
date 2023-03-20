import { runApp, config as iceConfig, IAppConfig, APP_MODE } from 'ice';

// import IP  from './ipconfig'

console.log('当前环境为：', APP_MODE);
console.log('是否开启Mock: ', iceConfig.mock);

const baseAdapter = window.GLOBAL_CONFIG.REACT_APP_API_BASE_URL;

console.log('当前后端baseURL：', baseAdapter);

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },

  request: {
    // 相关详细配置请查看：https://ice.work/docs/guide/basic/request#useRequest
    // 可选的，全局设置 request 是否返回 response 对象，默认为 false
    withFullResponse: false,
    timeout: 10000,
    baseURL: baseAdapter,
    headers: {},
    // ...RequestConfig 其他参数
    // 拦截器
    interceptors: {
      request: {
        onConfig: config => {
          // 发送请求前：可以对 RequestConfig 做一些统一处理
          const newConfig = { ...config };
          newConfig.headers = { a: 1 };
          return newConfig;
        },
        onError: error => {
          return Promise.reject(error);
        },
      },
      response: {
        onConfig: response => {
          // 请求成功：可以做全局的 toast 展示，或者对 response 做一些格式化
          if (!response.data.status !== 200) {
            console.error('请求失败');
          }
          return response;
        },
        onError: error => {
          // 请求出错：服务端返回错误状态码
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          return Promise.reject(error);
        },
      },
    },
  },
  router: {
    type: 'hash',
  },
};

// export default defineConfig(() => ({
//   publicPath: '/',
// }));
runApp(appConfig);
