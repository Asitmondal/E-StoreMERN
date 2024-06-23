import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {Provider} from 'react-redux';
import store from "./redux/store";
import {Route, RouterProvider, createRoutesFromElements} from 'react-router';
import {createBrowserRouter} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

//Auth
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

import Home from "./pages/Home.jsx";
import Favorites from "./pages/Products/Favorites.jsx";
//import ProductDetails from "./pages/Products/ProductDetails.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route index={true} path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorites />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <PayPalScriptProvider>
      <RouterProvider router={router} />
    </PayPalScriptProvider>
  </Provider>
);
