
import { useState } from "react";
import Search from "../components/Search";
import { Link } from "react-router-dom"


function ListTravels() {

    const [travels] = useState({
        hourDeparture: '09:00 AM',
        hourdestination: '11:45 AM',
        seats: 30,
        type: 'Direct',
        price: 396.00
    });

    return(
        <div className="container mt-5">
            <Search />
            <div className="card mt-2 p-3">
                <div className="row d-flex justify-content">
                    <div className="col-ls-8 d-flex justify-content">
                        <div className="col">
                            <span>{travels.hourDeparture} - {travels.hourdestination}</span>
                        </div>
                        <div className="col">
                            <span>{travels.seats} asientos</span>
                        </div>
                        <div className="col">
                            <span>viaje {travels.type}</span>
                        </div>
                        <div className="col">
                            <span>{travels.price}</span>
                        </div>
                        <div className="col">
                            <Link className="btn btn-danger" to="/tripData">Elegir</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mt-2 p-3">
                <div className="row d-flex justify-content">
                    <div className="col-ls-8 d-flex justify-content">
                        <div className="col">
                            <span>{travels.hourDeparture} - {travels.hourdestination}</span>
                        </div>
                        <div className="col">
                            <span>{travels.seats} asientos</span>
                        </div>
                        <div className="col">
                            <span>{travels.type}</span>
                        </div>
                        <div className="col">
                            <span>{travels.price}</span>
                        </div>
                        <div className="col">
                            <Link className="btn btn-danger" to="/tripData">Elegir</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mt-2 p-3">
                <div className="row d-flex justify-content">
                    <div className="col-ls-8 d-flex justify-content">
                        <div className="col">
                            <span>{travels.hourDeparture} - {travels.hourdestination}</span>
                        </div>
                        <div className="col">
                            <span>{travels.seats} asientos</span>
                        </div>
                        <div className="col">
                            <span>{travels.type}</span>
                        </div>
                        <div className="col">
                            <span>{travels.price}</span>
                        </div>
                        <div className="col">
                            <Link className="btn btn-danger" to="/tripData">Elegir</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mt-2 p-3">
                <div className="row d-flex justify-content">
                    <div className="col-ls-8 d-flex justify-content">
                        <div className="col">
                            <span>{travels.hourDeparture} - {travels.hourdestination}</span>
                        </div>
                        <div className="col">
                            <span>{travels.seats} asientos</span>
                        </div>
                        <div className="col">
                            <span>{travels.type}</span>
                        </div>
                        <div className="col">
                            <span>{travels.price}</span>
                        </div>
                        <div className="col">
                            <Link className="btn btn-danger" to="/tripData">Elegir</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mt-2 p-3">
                <div className="row d-flex justify-content">
                    <div className="col-ls-8 d-flex justify-content">
                        <div className="col">
                            <span>{travels.hourDeparture} - {travels.hourdestination}</span>
                        </div>
                        <div className="col">
                            <span>{travels.seats} asientos</span>
                        </div>
                        <div className="col">
                            <span>{travels.type}</span>
                        </div>
                        <div className="col">
                            <span>{travels.price}</span>
                        </div>
                        <div className="col">
                            <Link className="btn btn-danger" to="/tripData">Elegir</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListTravels;