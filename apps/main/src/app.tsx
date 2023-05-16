import { runApp, IAppConfig } from 'ice';
import '@arco-design/web-react/dist/css/arco.css';

const appConfig: IAppConfig = {
  app: {
    rootId: 'icestark-container',
  },
  router: {
    type: 'browser',
  },
};

runApp(appConfig);
