import React, { Component } from 'react';

export default class Comment extends Component {
    state = {
        isRed: true
    }
    
    render() {
        // OLD
//        let classComment;
//        if (this.state.isRed) { classComment = "comment comment--red"}
//        else { classComment="comment" }

        // NEW
        const classComment = this.state.isRed ? "comment comment--red" : "comment";

        const {name, message} = this.props;
        return (
            <div>
                <article className={classComment}>
                    <span>{name}</span>
                    <p>{message}</p>
                </article>
            </div>
        )
    }
}
