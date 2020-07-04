// this contains JSX that will be compiled in the scripts folder

const obj = {
    name: 'Katherine',
    getName() {
        return this.name;
    }
}

const getName = obj.getName.bind({obj});

console.log(getName())

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
            <AddOption options={options}/>
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
    handleButton() {
        alert('handle')
    }
    render() {
        return (
            <div>
            <button onClick={this.handleButton}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    handleRemove() {
        alert('remove all')
    }
    render() {
        return (
            <div>
            <button onClick={this.handleRemove}>Remove All</button>
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
    handleSubmit(event) {
        event.preventDefault();
        const optionValue = event.target.elements.option.value;
        if (optionValue) {
            options.push(optionValue);
            event.target.elements.option.value = '';
            console.log(optionValue)
        }
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));