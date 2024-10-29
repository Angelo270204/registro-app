//Use state es una funcion que nos permite actualizar y guardar los datos de los componentes

import React, { useState } from "react";

const Register: React.FC = () => {

    return (
        <div className="register-container">
            <form>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;

