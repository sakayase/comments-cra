import React, {Component} from 'react';

class FormComment extends Component {

    state = {
        name: "",
        message: "",
        comments: []
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }
    submitComment = (event) => {
        event.preventDefault();
        const allInput = {
            name: this.state.name,
            message: this.state.message,
        }
        this.setState({
            comments: this.state.comments.concat(allInput)
        })
    }

    render() {
        return (
            <form className="commentform"
            onSubmit={this.submitComment}
            >
                <h2 className="title">Ajouter un commentaire</h2>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Your name" 
                        onChange={this.handleNameChange}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Your comment"
                        onChange={this.handleNameChange}
                        />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-primary">Envoyer</button>
                    </div>
                </div>
            </form>
        );
    }
}
  
export default FormComment;