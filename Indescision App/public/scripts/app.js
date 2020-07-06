'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// this contains JSX that will be compiled in the scripts folder

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handleRandomPick = _this.handleRandomPick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.deleteSingleOption = _this.deleteSingleOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleRandomPick',
        value: function handleRandomPick() {
            var _this2 = this;

            this.setState(function () {
                var randomOption = Math.floor(Math.random() * _this2.state.options.length);
                var optionArray = _this2.state.options[randomOption];
                alert(optionArray);
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'deleteSingleOption',
        value: function deleteSingleOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'this option already exists';
            }

            // this.setState((prevState) => {
            //     return {
            //         options: prevState.options.concat([option])
            //     }
            // })

            this.setState(function (prevState) {
                return { options: prevState.options.concat([option]) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Computer Organizer';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, handleRandomPick: this.handleRandomPick }),
                React.createElement(Options, { options: this.state.options, handleDeleteOption: this.handleDeleteOption, deleteSingleOption: this.deleteSingleOption }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision App'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleRandomPick,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOption },
            'Remove All'
        ),
        React.createElement(
            'h3',
            null,
            'Options'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { option: option, key: option,
                deleteSingleOption: props.deleteSingleOption
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        'Option: ',
        props.option,
        React.createElement(
            'button',
            { onClick: function onClick(event) {
                    props.deleteSingleOption(props.option);
                }
            },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this3.handleAddOption = _this3.handleAddOption.bind(_this3);
        _this3.state = {
            error: undefined
        };
        return _this3;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return {
                    error: error
                };
            });
            e.target.elements.option.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
