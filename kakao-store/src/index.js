import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
import {PersistGate} from "redux-persist/integration/react"
import { persistStore } from 'redux-persist';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);
const queryClient = new QueryClient();

//200, 500, 401, 3XX, 2XX, 4XX 

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>

      {/* <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate> */}
    </Provider>
  </React.StrictMode>
);