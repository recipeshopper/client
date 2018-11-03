import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'gatsby'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { App } from './App';
import { reducer } from '../components/reducers/reducer';

import Layout from '../components/layout'
import Image from '../components/image'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root')
)
