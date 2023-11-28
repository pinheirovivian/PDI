import CartProvider, { CartContext } from './context/cart';
import { Login } from './pages/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
     <CartProvider>
        <Routes>
          <Route path='/' element={<Login/>}/>
        </Routes>
     </CartProvider>
      </Router>
    </div>
  );
}

export default App;
