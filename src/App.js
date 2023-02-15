import './App.css';
import Home from './components/home/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Destination from './components/destination/Destination';

const Layout = () => {
  return (
    <div className='App'>
      <Navbar />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/destination',
        element: <Destination />
      },
      {
        path: '/crew',
        element: <Destination />
      },
      {
        path: '/technology',
        element: <Destination />
      },
    ]
  },
 
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
