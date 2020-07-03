// this contains JSX that will be compiled in the scripts folder

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Computer Organizer';
        const options = ['One', 'Two', 'Three'];


        return (
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action />
            <Options options={options}/>
            <AddOption />
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
            <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
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
            <ol>
           Option: {this.props.option}
            </ol>
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
            <form>
            <input type="text" />
            </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));