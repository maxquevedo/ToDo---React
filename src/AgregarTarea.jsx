class AgregarTarea extends React.Component{

    constructor(props){
        super(props);
        this.agregar = this.agregar.bind(this);
        this.state = {
            agregar: [{Descripción: "", Fecha:'', Estado:'Pendiente' }]
        }
    }

    agregar = () => {
        return <div>
            <form className="form form-control">
                <h1>holi</h1>
            </form>
        </div>
    }

    render(){
        const { agregar } = this.state;
        return <div className="row jumbotron justify-content-center" onClick = {this.agregar}>                 
                {
                    agregar.map((val,idx) => {
                        let id = `${idx}`
                        var inputs = document.getElementsByTagName("input"); //or document.forms[0].elements;
                        var cbs = []; //will contain all checkboxes
                        for (var i = 0; i < inputs.length; i++) {
                            if (inputs[i].type == "checkbox") {
                                cbs.push(inputs[i]);
                            }
                        }
                        id = cbs.values+1;
                        console.log(id);
                        return(<div key={idx}>
                            <form className="" method="POST" action="">
                                <input type="hidden" value={id} id="id"/>
                                <label htmlFor="descripcion">Descripción</label>
                                <textarea id="descripcion" className="form-control" name="descripcion"/>
                                <label htmlFor="fecha">Fecha</label>
                                <input id="fecha" className="form-control" type="date" name="fecha"/>
                            </form>
                        </div>)
                    })
                }
                &nbsp;&nbsp;&nbsp;
                <h1 onClick={()=>{
                    console.log($("id").val(),$("descripcion").val(),$("fecha").val());
                    fetch(`http:localhost:3000/tareas`,{
                        method:"POST",
                        headers:{"Content-Type": "application/json"},
                        body: JSON.stringify({id:$("id").val(),descripcion:$("descripcion").val(),fecha_limite:$("fecha").val(),estado:'pendiente',peso:2})
                    });
                }}><br/><i className="fas fa-plus"></i></h1>
            </div>;
    }
}