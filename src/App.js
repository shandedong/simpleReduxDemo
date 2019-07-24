import React from 'react';

import ImportStoreWay1 from './ImportStoreWay/ImportStoreWay1';
import ImportStoreWay2 from './ImportStoreWay/ImportStoreWay2';

import ReactRedux from './ReactRedux';

import CombineReducers from './CombineReducers';

import './App.css';

function App() {
	return (
		<div className="App">
			<ImportStoreWay1 />

			<ImportStoreWay2 />

			<hr />

			<ReactRedux />

			<hr />

			<CombineReducers />
		</div>
	);
}

export default App;
