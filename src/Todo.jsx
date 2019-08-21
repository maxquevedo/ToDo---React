class Todo extends React.Component{    
    constructor(props){
        super(props);
        this.state = {
             loading : true,
             tareas: [],
             ordenarPor: 'id',
             clicks: 2,
             clickeadas: [],
        }

        this.Ordenar = this.Ordenar.bind(this);
        this.Liberar = this.Liberar.bind(this);
    }


    Ordenar = () =>{
        let actualState = "";
        switch (this.state.clicks) {
            case 0:
                this.setState({ordenarPor:'id',clicks:1});
                actualState = "Creación";
                break;
            case 1:
                this.setState({ordenarPor:'fecha',clicks:2});
                actualState = "Vencimiento";
                break;
            case 2:
                this.setState({ordenarPor:'peso',clicks:0});
                actualState = "Estado";
            default:
                break;
        }
        alert(`Ordenado por: ${actualState}`);
        
    }

    Liberar = ()=>{
        var inputs = document.getElementsByTagName("input"); //or document.forms[0].elements;
        var cbs = []; //will contain all checkboxes
        var checked = []; //will contain all checked checkboxes
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type == "checkbox") {
                cbs.push(inputs[i]);
                if (inputs[i].checked) {
                    checked.push(inputs[i]);
                }
            }
        }
        for (let i = 0; i < checked.length; i++) {
            const element = checked[i].id;
            fetch(`http://localhost:3000/tareas/${element}`,{
                method: "PATCH",
                headers: {"Content-Type": "application/json" },
                body:JSON.stringify({ "estado":"liberada" ,"peso":3})
            }).then(document.location.reload());
            
        }
    }

    componentWillMount(){
        var tareas = [];
        fetch('http://localhost:3000/tareas').then(resp => resp.json()).then( respjson => {
            for(let i=0; i<respjson.length; i++){
                tareas.push(respjson[i]);
            }
            this.setState({tareas: tareas,loading:false});
        });    
    }

    render(){
        var indice = this.state.ordenarPor;
        if(this.state.loading){
            return <h1 align="center">Cargando</h1>;
        }else{
            let Todo = [];
            Todo.push(<Botones Ordenar={this.Ordenar} estado={this.state.ordenarPor} Liberar={this.Liberar}/>)
            for (let i = 0; i < this.state.tareas.length; i++) {
                const element = this.state.tareas[i];
                Todo.push(<Tareas id={element.id} desc={element.descripcion} fecha={element.fecha_limite} estado={element.estado} peso={element.peso} />);
            }

            
            
            switch (indice) {
                case "id":
                    Todo.sort((a,b)=>{
                        if(a.props.id > b.props.id){
                            return 1;
                        }
                        if(a.props.id < b.props.id){
                            return -1
                        }
                        return 0;
                    })
                    break;
                case "fecha":
                    Todo.sort((a,b)=>{
                        if(a.props.fecha > b.props.fecha){
                            return 1;
                        }
                        if(a.props.fecha < b.props.fecha){
                            return -1
                        }
                        return 0;
                        })
                    break;
                case "peso":
                    Todo.sort((a,b)=>{
                        if(a.props.peso > b.props.peso){
                            return 1;
                        }
                        if(a.props.peso < b.props.peso){
                            return -1
                        }
                        return 0;
                    })
                default:
                    break;
            }

            Todo.push(<AgregarTarea/>);
            return Todo;
        }        
    }
}
