var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todo = function (_React$Component) {
    _inherits(Todo, _React$Component);

    function Todo(props) {
        _classCallCheck(this, Todo);

        var _this = _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).call(this, props));

        _this.Ordenar = function () {
            var actualState = "";
            switch (_this.state.clicks) {
                case 0:
                    _this.setState({ ordenarPor: 'id', clicks: 1 });
                    actualState = "Creación";
                    break;
                case 1:
                    _this.setState({ ordenarPor: 'fecha', clicks: 2 });
                    actualState = "Vencimiento";
                    break;
                case 2:
                    _this.setState({ ordenarPor: 'peso', clicks: 0 });
                    actualState = "Estado";
                default:
                    break;
            }
            alert('Ordenado por: ' + actualState);
        };

        _this.Liberar = function () {
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
            for (var _i = 0; _i < checked.length; _i++) {
                var element = checked[_i].id;
                fetch('http://localhost:3000/tareas/' + element, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ "estado": "liberada", "peso": 3 })
                }).then(document.location.reload());
            }
        };

        _this.state = {
            loading: true,
            tareas: [],
            ordenarPor: 'id',
            clicks: 2,
            clickeadas: []
        };

        _this.Ordenar = _this.Ordenar.bind(_this);
        _this.Liberar = _this.Liberar.bind(_this);
        return _this;
    }

    _createClass(Todo, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            var tareas = [];
            fetch('http://localhost:3000/tareas').then(function (resp) {
                return resp.json();
            }).then(function (respjson) {
                for (var i = 0; i < respjson.length; i++) {
                    tareas.push(respjson[i]);
                }
                _this2.setState({ tareas: tareas, loading: false });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var indice = this.state.ordenarPor;
            if (this.state.loading) {
                return React.createElement(
                    'h1',
                    { align: 'center' },
                    'Cargando'
                );
            } else {
                var _Todo = [];
                _Todo.push(React.createElement(Botones, { Ordenar: this.Ordenar, estado: this.state.ordenarPor, Liberar: this.Liberar }));
                for (var i = 0; i < this.state.tareas.length; i++) {
                    var element = this.state.tareas[i];
                    _Todo.push(React.createElement(Tareas, { id: element.id, desc: element.descripcion, fecha: element.fecha_limite, estado: element.estado, peso: element.peso }));
                }

                switch (indice) {
                    case "id":
                        _Todo.sort(function (a, b) {
                            if (a.props.id > b.props.id) {
                                return 1;
                            }
                            if (a.props.id < b.props.id) {
                                return -1;
                            }
                            return 0;
                        });
                        break;
                    case "fecha":
                        _Todo.sort(function (a, b) {
                            if (a.props.fecha > b.props.fecha) {
                                return 1;
                            }
                            if (a.props.fecha < b.props.fecha) {
                                return -1;
                            }
                            return 0;
                        });
                        break;
                    case "peso":
                        _Todo.sort(function (a, b) {
                            if (a.props.peso > b.props.peso) {
                                return 1;
                            }
                            if (a.props.peso < b.props.peso) {
                                return -1;
                            }
                            return 0;
                        });
                    default:
                        break;
                }

                _Todo.push(React.createElement(AgregarTarea, null));
                return _Todo;
            }
        }
    }]);

    return Todo;
}(React.Component);