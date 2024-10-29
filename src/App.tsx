import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

//Este es el componenete principal de la aplicacion

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App">
      <nav>
        <button onClick={() => setIsLogin(true)}>Iniciar sesión</button>
        <button onClick={() => setIsLogin(false)}>Registrarse</button>
        {isLogin ? <Login /> : <Register />}
      </nav>
    </div>
  );
};

//Este componente se encarga de mostrar el Login o el Register
export default App;