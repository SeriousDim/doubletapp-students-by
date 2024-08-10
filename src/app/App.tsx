import './App.css'
import {ApiProvider} from './api-provider'
import {AppRouter} from './routing'

function App() {
  return (
    <ApiProvider>
      <AppRouter/>
    </ApiProvider>
  )
}

export default App
