import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import store from './redux/redux-store';


let rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<App store={store} />
		</BrowserRouter>,
		document.getElementById('root')
	);
}

rerenderEntireTree(store)

store.subscribe(() => {
	let state = store.getState()
	rerenderEntireTree(state)
})

