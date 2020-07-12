// this contains JSX that will be compiled in the scripts folder

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleRandomPick = this.handleRandomPick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleSingleOption = this.handleSingleOption.bind(this);
        this.state = {
            options: props.options
        }
    }

    handleRandomPick() {
        const randomOption = Math.floor(Math.random() * this.state.options.length);
        const optionArray = this.state.options[randomOption];
            alert(optionArray)
    }

    handleDeleteOption() {
        this.setState(() => ({
            options: []
        }))
    }

    handleAddOption(option) {
        if (!option) {
            return 'enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }))
    }

    handleSingleOption(option) {
        console.log("single option", option)
        this.setState((prevState) => ({
            options: prevState.options.filter((optionToRemove) => {
                return optionToRemove !== option
            })
        }))
    }

    render() {
        const subtitle = 'Computer Organizer';
        return (
            <div>
            <Header subtitle={subtitle}/>
            <Action hasOptions={this.state.options.length > 0} handleRandomPick={this.handleRandomPick}/>
            <Options options={this.state.options} handleDeleteOption={this.handleDeleteOption} handleSingleOption={this.handleSingleOption} />
            <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App'
}



const Action = (props) => {
    return (
        <div>
        <button onClick={props.handleRandomPick}
        disabled={!props.hasOptions}
        >What should I do?</button>
        </div>
    )
}

const Options = (props) => {
    console.log("props from Options",props)
    return (
        <div>
        <button onClick={props.handleDeleteOption}>Remove All</button>
        <h3>Options</h3>
            {props.options.map((option) => {
              return <Option option={option} key={option} handleSingleOption={props.handleSingleOption}
               />
            })}
        </div>
    )
}

const Option = (props) => {
    console.log("props from Option",props)
    return (
        <div>
        <p>Option: {props.option}</p>
        <button onClick={(event) => props.handleSingleOption(props.option)}>Remove</button>
        </div>
    )
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
       e.target.elements.option.value = '';
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