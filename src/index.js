import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { state } from './redux/state';


let rerenderEntireTree = (DATA) => {
	ReactDOM.render(
		<BrowserRouter>
			<App DATA={DATA.getDATA()} dispatch={state.dispatch.bind(state)} />
		</BrowserRouter>,
		document.getElementById('root')
	);
}

rerenderEntireTree(state)

state.handler(rerenderEntireTree)

