import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from "@sentry/apm";
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './shared/store';
import FileLoader from './MainPage/FileLoader';
import MainPage from './MainPage';

Sentry.init({
  dsn: 'https://dfc5dfbfd66d4e28a575c00e4512c77a@sentry.theo.do/4',
  release: 'my-project-name@' + process.env.npm_package_version,
  integrations: [
    new Integrations.Tracing(),
  ],
  tracesSampleRate: 1.0, // Be sure to lower this in production
});

ReactDOM.render(
  <Provider store={store}>
    <FileLoader />
  </Provider>, document.getElementById('file-loader'));

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>, document.getElementById('editor'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
