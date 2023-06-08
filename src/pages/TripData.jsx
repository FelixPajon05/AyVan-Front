/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom";

function TripData() {
    return(

        <div className="container">
            <h5 className="mt-5">Elige tu asiento</h5>
            <div className="row mt-5">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="hstack gap-3">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="hstack gap-3">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-center mt-5 mb-5">
                        <div className="hstack gap-3">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                                <label>
                                    Asiento ocupado
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" value="" id="flexCheckDefault" checked/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Asiento seleccionado
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
                                <Link className="btn btn-danger" to="/Passenger">Continuar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripData;