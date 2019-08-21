class Tareas extends React.Component{
    render(){
        let icono = "";
        let color = "";
        let puntos = 0;

        switch (this.props.estado) {
            case "pendiente":
                icono="far fa-clock";
                color = "#FCB900";
                puntos = 2;
                break;
            case "atrasada":
                icono="fas fa-times-circle";
                color="#DB3E00";
                puntos = 1;
                break;
            case "liberada":
                icono ="fas fa-check-circle";
                color="#008B02";
                puntos = 3;
                break;        
            default:
                break;
        }

        let estilo = { backgroundColor: color, fontWeight: 'bold' };

        return <div className="jumbotron" style={estilo} onClick={ () => {
                    var doc = document.getElementById(this.props.id);
                    doc.checked = !(doc.checked);
                }}>
                    <div className="row">
                        <div className="col-md-1 my-auto">
                            <input id={this.props.id} type="checkbox" />
                        </div>  
                        <div className="col-md-6 my-auto">
                            {this.props.desc}
                        </div>
                        <div className="col-md-3 my-auto">
                            {this.props.fecha}&nbsp;<i className="fas fa-calendar-alt" style={{fontSize:25}}></i>
                        </div>
                        <div className="col-md-2 my-auto">
                            <i className={icono} style={{fontSize:35}}></i>
                        </div>
                    </div>
                </div>
    }
}
