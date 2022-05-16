import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Todo from './Todo';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers/reducer';

const store = createStore(reducer)

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
// root.render(<Provider store={store}><Todo/></Provider>);