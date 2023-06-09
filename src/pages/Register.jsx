
import { Link } from "react-router-dom";

function Register() {
    return(
        <div className="d-flex justify-content-center mt-5">
            <div className="card">
                <div className="card-title mx-auto m-5">
                    <img src="data:image/png;base64,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" />
                </div>
                <div className="card-body">
                    <input className="border border-top-0 border-end-0 border-start-0" type="text" placeholder="Nombre"/>
                    <br />
                    <input className="border border-top-0 border-end-0 border-start-0 my-3" type="email" placeholder="Email"/>
                    <br />
                    <input className="border border-top-0 border-end-0 border-start-0 mb-3" type="password" placeholder="Contraseña"/>
                    <br />
                    <input className="border border-top-0 border-end-0 border-start-0" type="password" placeholder="Repetir contraseña"/>
                </div>
                <div className="footer m-2">
                    <Link className="btn btn-primary col-12" to="/login">Registrar</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;