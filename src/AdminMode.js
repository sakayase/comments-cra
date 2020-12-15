import React, { Component } from 'react'

export default class AdminMode extends Component {
    state = {
        toggled: true
    }

    toggleColor = () => {
        if (this.state.toggled) {
            this.setState({
                toggled: false
            })
        } else {
            this.setState({
                toggled: true
            })
        }
    }

    render() {
        const className = this.state.toggled ? "is-danger" : ""

        return (
            <article className={"message is-info " + className}>
                <div className="message-body">
                    <button onClick={this.toggleColor} className={"button is-info " + className}>
                        Activer le mode d'administration
                    </button>
                </div>
            </article>
        )
    }
}
