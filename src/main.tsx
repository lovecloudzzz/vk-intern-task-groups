import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from "@app/entry.tsx";
import {store} from "@app/store.ts";
import { Provider as ReduxProvider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ReduxProvider store={store}>
        <App/>
      </ReduxProvider>
  </React.StrictMode>,
)
