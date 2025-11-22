import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios'

export const Context = createContext(null)

const start = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Context.Provider value={{
        lists: (await axios.get('http://127.0.0.1:5000/api/lists/get_all')).data
      }}>
        <App />
      </Context.Provider>
    </React.StrictMode>
  );
}

start()
