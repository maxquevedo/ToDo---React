var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tareas = function (_React$Component) {
    _inherits(Tareas, _React$Component);

    function Tareas() {
        _classCallCheck(this, Tareas);

        return _possibleConstructorReturn(this, (Tareas.__proto__ || Object.getPrototypeOf(Tareas)).apply(this, arguments));
    }

    _createClass(Tareas, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var icono = "";
            var color = "";
            var puntos = 0;

            switch (this.props.estado) {
                case "pendiente":
                    icono = "far fa-clock";
                    color = "#FCB900";
                    puntos = 2;
                    break;
                case "atrasada":
                    icono = "fas fa-times-circle";
                    color = "#DB3E00";
                    puntos = 1;
                    break;
                case "liberada":
                    icono = "fas fa-check-circle";
                    color = "#008B02";
                    puntos = 3;
                    break;
                default:
                    break;
            }

            var estilo = { backgroundColor: color, fontWeight: 'bold' };

            return React.createElement(
                "div",
                { className: "jumbotron", style: estilo, onClick: function onClick() {
                        var doc = document.getElementById(_this2.props.id);
                        doc.checked = !doc.checked;
                    } },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-md-1 my-auto" },
                        React.createElement("input", { id: this.props.id, type: "checkbox" })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-6 my-auto" },
                        this.props.desc
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-3 my-auto" },
                        this.props.fecha,
                        "\xA0",
                        React.createElement("i", { className: "fas fa-calendar-alt", style: { fontSize: 25 } })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-2 my-auto" },
                        React.createElement("i", { className: icono, style: { fontSize: 35 } })
                    )
                )
            );
        }
    }]);

    return Tareas;
}(React.Component);