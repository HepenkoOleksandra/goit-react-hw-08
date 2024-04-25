import React from 'react'
import ReactDOM from 'react-dom/client'
import 'modern-normalize'
import { Provider } from 'react-redux'
import App from './components/App'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode >,
);
