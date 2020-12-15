import React, { Component } from 'react';

export default class Comment extends Component {
//    state = {
//        isRed: true
//    }
    
    render() {
        // OLD
//        let classComment;
//        if (this.state.isRed) { classComment = "comment comment--red"}
//        else { classComment="comment" }

        // NEW
//        const classComment = this.state.isRed ? "comment comment--red" : "comment";

        const {name, message} = this.props;
        return (
            <div className="ml-5 mb-1">
                <article /*className={classComment}*/>
                    <span className="has-text-weight-bold">{name}</span>
                    <p className="mt-0">{message}</p>
                </article>
            </div>
        )
    }
}
