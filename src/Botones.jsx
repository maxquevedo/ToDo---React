class Botones extends React.Component{

    render(){
        return <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-4 my-auto">
                    <button className="btn btn-primary" onClick={this.props.Liberar}>Liberar Seleccionadas</button>
                </div>
                <div className="col-md-5 my-auto">
                    <span className="" onClick={this.props.Ordenar}>
                        <i className="fas fa-filter" style={{fontSize: 25}}></i>
                        {this.props.estado==="id" ? <h5 className="inline">Creación</h5>:
                            this.props.estado==="fecha"? <h5 className="inline">Vencimiento</h5>:
                                <h5 className="inline">Estado</h5> }
                    </span>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-7"></div>
                <div className="col-md-5 orden" ></div>
            </div>
        </div>
            
    }
}