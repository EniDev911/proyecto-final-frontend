import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import AppCtx from './context/AppCtx';

function App() {

  return (

    <div className="App">
      <AppCtx>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} index/>
          <Route path="/login" element={<Login />} index/>
        </Routes>
      </AppCtx>
    </div>
  )
}

export default App
