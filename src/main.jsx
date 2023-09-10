import ReactDOM from 'react-dom';
import React from 'react';
import { createRoot } from 'react-dom';

// Bloco de Rotas
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Erro404 from './routes/404Error.jsx';
import QuemSomos from './routes/QmSomos.jsx';

const router = createBrowserRouter([
  {path: "/", element: <Home/>, errorElement: <Erro404/>,
    children:[
      { path:"/",element:<Home />},
      { path:"./routes/quemsomos",element:<QuemSomos /> },
    ]    
},  
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
