import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import App from './App';
import todoApp from './reducer';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(
    todoApp,
    persistedState
);

store.subscribe(() => {
    saveState({
        todos: store.getState().todos,
    });
});

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

