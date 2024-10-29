//Use state es una funcion que nos permite actualizar y guardar los datos de los componentes

import React, { useState } from "react";

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <form>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};


export default Login;