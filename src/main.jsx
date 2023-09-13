import ReactDOM from 'react-dom';
import React from 'react';
import { createRoot } from 'react-dom';

// Bloco de Rotas
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Erro404 from './routes/404Error.jsx';
import QuemSomos from './routes/QmSomos.jsx';
import Monitoramento from './routes/Monitoramento.jsx';
import Login from './routes/Login.jsx';
import App from './App.jsx';
import Cadastro from './routes/Cadastro.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App/>, errorElement: <Erro404/>,
    children:[
      { path:"/", element:<Home /> },
      { path:"QmSomos", element:<QuemSomos /> },
      { path:"Monitoramento", element:<Monitoramento/> },
      { path: "Login", element:<Login/> },
      { path: "Cadastro", element:<Cadastro/>}
    ]    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
