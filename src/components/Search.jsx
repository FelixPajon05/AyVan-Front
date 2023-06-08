import { Link } from "react-router-dom";

function Search() {
    return(
        <div className="row">
            <div className="col-lg-3 col-sm-6 col-dm-6">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingFrom" placeholder="Origen" />
                    <label htmlFor="floatingInput">Origen</label>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-dm-6">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingTo" placeholder="Destino" />
                    <label htmlFor="floatingPassword">Destino</label>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-dm-6">
                <div className="form-floating">
                    <input type="date" className="form-control" id="floatingFrom" placeholder="Origen" />
                    <label htmlFor="floatingInput">Salida</label>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-dm-6">
                <div className="form-floating">
                    <input type="date" className="form-control" id="floatingTo" placeholder="Destino" />
                    <label htmlFor="floatingPassword">Regreso (Opcional)</label>
                </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto my-4">
                <Link className="btn btn-primary" to="/travels" type="button">
                    Buscar
                </Link>
            </div>
        </div>
    );
}

export default Search;