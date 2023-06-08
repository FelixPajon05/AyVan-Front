import { Link } from "react-router-dom";

function PaymentMethods() {
    return(
        <div className="container mt-5">
            <h3>Metodos de pago</h3>
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                {/* Button trigger modal */}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal">
                                    Tarjeta de crédito o débito
                                </button>
                                {/* Modal */}
                                <div className="modal fade" id="cardModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                Tarjeta
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            {/* Button trigger modal */}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#transferModal">
                                    Transferencia
                                </button>
                                {/* Modal */}
                                <div className="modal fade" id="transferModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                Transferencia
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
    );
}

export default PaymentMethods;