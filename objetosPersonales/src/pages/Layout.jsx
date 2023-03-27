import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="flex-row max-h-screen">
      <aside className="bg-blue-500 w-1/5">
        <div>Contenido</div>
        <div>
          <Link to={"/"}>Link</Link>
        </div>
        <div>
          <Link to={"/registrar"}>Registro</Link>
        </div>
        <div>Registrar</div>
      </aside>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
