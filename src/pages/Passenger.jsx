import { Link } from "react-router-dom";

function Passenger() {
    return(

        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-8 mb-5">
                    <div className="card p-3">
                        <div className="row">
                            <div className="col">
                                <label className="text-danger" htmlFor="">*El nombre es obligatorio</label>
                                <br />
                                <input className="border border-top-0 border-end-0 border-start-0" type="text" placeholder="Nombre"/>
                            </div>
                            <div className="col">
                                <label className="text-danger" htmlFor="">*El apellido es obligatorio</label>
                                <br />
                                <input className="border border-top-0 border-end-0 border-start-0 focused" type="text" placeholder="Apellido"/>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <label className="text-danger" htmlFor="">*El email es obligatorio</label>
                                <br />
                                <input className="border border-top-0 border-end-0 border-start-0" type="text" placeholder="Email"/>
                            </div>
                            <div className="col">
                                <label className="text-danger" htmlFor="">*Confirmar el email es obligatorio</label>
                                <br />
                                <input className="border border-top-0 border-end-0 border-start-0 focused" type="text" placeholder="Confirmar email"/>
                            </div>
                        </div>
                        <div className="d-flex justify-content-start mt-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    De acuerdo con el 
                                    <Link>
                                        Términos y Condiciones
                                    </Link>
                                    , así como el 
                                    <Link>
                                        Aviso de Privacidad
                                    </Link>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-title p-3">
                            <h5>Datos de viaje de ida</h5>
                            <ul>
                                <li>Lunes 2 de Octubre de 2023</li>
                                <li>Ciudad de Mexico - Querétaro</li>
                                <li>09:00 am - 11:30 am</li>
                            </ul>
                        </div>
                        <hr />
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <ul>
                                        <li>Viaje de ida</li>
                                        <li>Subtotal</li>
                                        <li>IVA</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul>
                                        <li>$332.64</li>
                                        <li>$332.64</li>
                                        <li>$63.36</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="row text-center">
                                <div className="col">
                                    <h5>Total: </h5>
                                </div>
                                <div className="col">
                                    <h5>$396.00</h5>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Link className="btn btn-danger" to="/PaymentMethods">Continuar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Passenger;