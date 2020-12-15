import React, { Component } from 'react'
import Comment from './Comment'

export default class ListComment extends Component {
    state= {
        comments: [
            { name: "JB", message: "Youhou la famille!"},
            { name: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"}
        ]
    }
    render() {
        const commentJSX = this.state.comments.map(author => {
            return <Comment name={author.name} message={author.message} />
          })
        
        return (
            <div>
                <h2 className="title">Liste des commentaires</h2>
                {commentJSX}
            </div>
        )
    }
}
