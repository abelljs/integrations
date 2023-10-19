import { Routes, Route } from 'react-router-dom';
import { routes } from '../routes';
import Navbar from './Navbar';
import { GlobalStyles } from './GlobalStyles';


function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Routes>
        {routes.map((props) => <Route key={props.path} {...props} />)}
      </Routes>
    </>
  )
}

export default App
