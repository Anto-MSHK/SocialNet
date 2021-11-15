import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost } from "./redux/state"
import { addMessage } from './redux/state';

export let rerenderEntireTree = (DATA) => {
	ReactDOM.render(
		<React.StrictMode>
			<App DATA={DATA} addPost={addPost} addMessage={addMessage} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}