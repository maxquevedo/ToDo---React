var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AgregarTarea = function (_React$Component) {
    _inherits(AgregarTarea, _React$Component);

    function AgregarTarea(props) {
        _classCallCheck(this, AgregarTarea);

        var _this = _possibleConstructorReturn(this, (AgregarTarea.__proto__ || Object.getPrototypeOf(AgregarTarea)).call(this, props));

        _this.agregar = function () {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { className: 'form form-control' },
                    React.createElement(
                        'h1',
                        null,
                        'holi'
                    )
                )
            );
        };

        _this.agregar = _this.agregar.bind(_this);
        _this.state = {
            agregar: [{ Descripción: "", Fecha: '', Estado: 'Pendiente' }]
        };
        return _this;
    }

    _createClass(AgregarTarea, [{
        key: 'render',
        value: function render() {
            var agregar = this.state.agregar;

            return React.createElement(
                'div',
                { className: 'row jumbotron justify-content-center', onClick: this.agregar },
                agregar.map(function (val, idx) {
                    var id = '' + idx;
                    var inputs = document.getElementsByTagName("input"); //or document.forms[0].elements;
                    var cbs = []; //will contain all checkboxes
                    for (var i = 0; i < inputs.length; i++) {
                        if (inputs[i].type == "checkbox") {
                            cbs.push(inputs[i]);
                        }
                    }
                    id = cbs.values + 1;
                    console.log(id);
                    return React.createElement(
                        'div',
                        { key: idx },
                        React.createElement(
                            'form',
                            { className: '', method: 'POST', action: '' },
                            React.createElement('input', { type: 'hidden', value: id, id: 'id' }),
                            React.createElement(
                                'label',
                                { htmlFor: 'descripcion' },
                                'Descripci\xF3n'
                            ),
                            React.createElement('textarea', { id: 'descripcion', className: 'form-control', name: 'descripcion' }),
                            React.createElement(
                                'label',
                                { htmlFor: 'fecha' },
                                'Fecha'
                            ),
                            React.createElement('input', { id: 'fecha', className: 'form-control', type: 'date', name: 'fecha' })
                        )
                    );
                }),
                '\xA0\xA0\xA0',
                React.createElement(
                    'h1',
                    { onClick: function onClick() {
                            console.log($("id").val(), $("descripcion").val(), $("fecha").val());
                            fetch('http:localhost:3000/tareas', {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ id: $("id").val(), descripcion: $("descripcion").val(), fecha_limite: $("fecha").val(), estado: 'pendiente', peso: 2 })
                            });
                        } },
                    React.createElement('br', null),
                    React.createElement('i', { className: 'fas fa-plus' })
                )
            );
        }
    }]);

    return AgregarTarea;
}(React.Component);