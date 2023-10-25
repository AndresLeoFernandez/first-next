"use client"

import { API_URL } from "@/config/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Login() {
    const router = useRouter();
    console.log(router);    
    const message = true;
    const [show,setShow]=useState(false);
    const [formData, setFormData] = useState({email: '',password: '',});
    
    async function fetchUser(email:string,password:string) {      
        console.log("entro a evaluar");
        const res = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password}),
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 201) {
            setShow(!show);
            
            router.push("/dashboard");
            
        }
        else return;
        {/*if (data.status == '201'){
            const result = await fetch(`${API_URL}/auth/profile`, {
                method: 'GET',
                headers: { Authorization: `Bearer ${data.data.access_token}`},
            })
            const user = await result.json();
            console.log(user)            
            return user;            
        }
        return data;*/}

    }
      
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        console.log(e);    
        try {
          const res = await fetchUser(formData.email,formData.password);
          /*console.log("inicio", res.data)          */
        } catch (error) {
            console.log('Error en el inicio de sesión:');
          console.error('Error en el inicio de sesión:', error);
    
          {/*setMessage('Error en el inicio de sesión. Verifica tus credenciales.');
          setTimeout(() => {
            setMessage(null)
          }, 2000); // 2000 milisegundos (2 segundos)
        }*/}
        };
    }
      
  
    function handlePasswordReset(){}  
    return (
        <>{/*{show ? 'modal fade show':'modal fade'}*/}
          <div className={show ? 'modal fade show':'modal fade'} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden={!show} >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Iniciar Sesion</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container rounded text-center p-5 mt-4 bg-sesion">
                            <div className="row align-items-center">
                            <div className="">
                                <h2 className="text-center">Iniciar sesión</h2>
                                    {message && <div className="alert alert-danger">{message}</div>}
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Correo electrónico:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            value={formData.email}
                                            placeholder="Ingrese Email"
                                            onChange={(e) => setFormData({...formData, email: e.target.value,})}                              
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Contraseña:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={formData.password}
                                            placeholder="Ingrese password"
                                            onChange={(e) => setFormData({...formData, password: e.target.value,})}                              
                                        />
                                    </div>
                                    {/*<div className="checkbox">
                                        <label>
                                            <input type="checkbox" /> Recordarme
                                        </label>
                                    </div>*/}
                                    <button type="submit" id="btn-iniciar" className="btn btn-primary btn-block">
                                        Iniciar sesión
                                    </button>
                                    <button
                                        type="button"
                                        id="btn-pass"
                                        className="btn btn-secondary btn-block m-2"
                                        onClick={() => {handlePasswordReset();}}
                                    >
                                        Olvidé mi contraseña
                                    </button>
                                </form>
                                 {/*<div className="App">
                                    {showSuccessAlert && (
                                        <Alert variant="success" className="mt-3 text-center">
                                            {showSuccessAlert.message}
                                        </Alert>
                                    )}
                                    {errorAlert && (
                                        <Alert variant="danger" className="mt-3 text-center">
                                            {errorAlert}
                                        </Alert>
                                    )}
                                    {showEmailWarning && (
                                        <Alert variant="danger" className="mt-3 text-center">
                                            Debes ingresar tu correo electrónico.
                                        </Alert>
                                    )}
                                    <Routes>
                                        <Route path="/inicio-sesion" element={<InicioSesion />} />
                                    </Routes>
                                    </div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Login;