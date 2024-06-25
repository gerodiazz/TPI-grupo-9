import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartPage from './components/cartPage/CartPage';
import ContactPage from './components/contactPage/ContactPage';
import HomePage from './components/homePage/HomePage';
import LoginForm from './components/LoginForm/LoginForm';
import Product from './components/product/Product';
import ProductDetail from './components/productDetail/ProductDetail';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

function App() {
  const router = createBrowserRouter ([
    {path:"/", element:<HomePage />},
    {path:"/login", element:<LoginForm />},
    {path:"/cartPage", element:<CartPage />},
    {path:"/contact", element:<ContactPage />},
    {path:"/register", element:<RegistrationForm />},
    {path:"/productDetail", element:<ProductDetail />},
    {path:"/product", element:<Product />}
  ])
  return (
    <div>
      {<RouterProvider router = {router}/>}

    </div>

  );
}

export default App;