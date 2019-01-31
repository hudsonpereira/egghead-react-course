import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            txt: 'this is the state txt',
            cat: 0
        }
    }

    update(e) {
        this.setState({
            txt: e.target.value
        })
    }

    render() {
        return <Button>I <Heart /> React</Button>
    }
}

const Button = (props) => <button>{props.children}</button>
class Heart extends React.Component {
    render() {
        return <span>&hearts;</span>
    }
}

App.propTypes = {
    txt: PropTypes.string.isRequired,
    cat: PropTypes.number.isRequired
}

App.defaultProps = {
    txt: 'this is the default'
}

export default App;
