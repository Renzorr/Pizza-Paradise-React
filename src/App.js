import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Inicio from "./pages/Inicio/Inicio";
import Nosotros from "./pages/Nosotros/Nosotros";
import Menu from "./pages/Menu/Menu";
import Tienda from "./pages/Tienda/Tienda";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="Nosotros" element={<Nosotros />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="Tienda" element={<Tienda />} />
      </Route>
    </Routes>
  );
}

export default App;
