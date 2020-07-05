// this contains JSX that will be compiled in the scripts folder

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleRandomPick = this.handleRandomPick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }

    handleRandomPick() {
        this.setState(() => {
        const randomOption = Math.floor(Math.random() * this.state.options.length);
        const optionArray = this.state.options[randomOption];
            alert(optionArray)
        })
    }

    handleDeleteOption() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handleAddOption(option) {
        if (!option) {
            return 'enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        })
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Computer Organizer';
        return (
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action hasOptions={this.state.options.length > 0} handleRandomPick={this.handleRandomPick}/>
            <Options options={this.state.options} handleDeleteOption={this.handleDeleteOption}/>
            <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}


class Header extends React.Component {

    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
            <button onClick={this.props.handleRandomPick}
            disabled={!this.props.hasOptions}
            >What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
            <button onClick={this.props.handleDeleteOption}>Remove All</button>
            <h3>Options</h3>
            {this.props.options.map((option) => {
             return <Option option={option} key={option}/>
            })}
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
           Option: {this.props.option}
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)
       this.setState(() => {
           return {
               error: error
           }
       })
    }

    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));