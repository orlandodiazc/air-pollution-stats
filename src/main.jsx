import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root'
import Details from './routes/Details'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
	},
	{
		path: 'details/:city',
		element: <Details />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
