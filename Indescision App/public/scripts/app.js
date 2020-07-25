// this contains JSX that will be compiled in the scripts folder

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handleRandomPick = _this.handleRandomPick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleSingleOption = _this.handleSingleOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleRandomPick',
        value: function handleRandomPick() {
            var randomOption = Math.floor(Math.random() * this.state.options.length);
            var optionArray = this.state.options[randomOption];
            alert(optionArray);
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption() {
            this.setState(function () {
                return {

                    options: []
                };
            });
        }
    }, {

        key: 'handleSingleOption',
        value: function handleSingleOption(option) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (optionToRemove) {

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

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([option])
                };
            });
        }
    }, {
        key: 'handleSingleOption',
        value: function handleSingleOption(option) {
            console.log("single option", option);
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (optionToRemove) {
                        return optionToRemove !== option;
                    })
                };
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

                React.createElement(Options, { options: this.state.options, handleDeleteOption: this.handleDeleteOption, handleSingleOption: this.handleSingleOption }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

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
    console.log("props from Options", props);
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

                handleSingleOption: props.handleSingleOption
            });
        })
    );
};

var Option = function Option(props) {
    console.log("props from Option", props);
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Option: ',
            props.option
        ),
        React.createElement(
            'button',
            { onClick: function onClick(event) {
                    return props.handleSingleOption(props.option);
                } },

            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
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
