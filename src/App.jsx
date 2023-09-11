import Cabecalho from "./components/cabecalho";
import Rodape from "./components/rodape";
import { Outlet } from "react-router-dom";

export default function App(){
    return (
        <>
        <Cabecalho/>
        <Outlet/>
        <Rodape/>
        </>
    )
}