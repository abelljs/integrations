/* @refresh reload */
import { hydrate } from 'solid-js/web'

import './index.css'
import App from './App'

const root = document.getElementById('root')

hydrate(() => <App />, root!)