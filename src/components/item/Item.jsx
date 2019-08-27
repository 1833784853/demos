import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {
    deleteDom = (event)=>{
        let {delateStateComment} = this.props;
        let id = event.target.getAttribute('data-id');
        delateStateComment(Number(id));
    }
    render() {
        let {comment} = this.props;
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="#1" onClick={this.deleteDom} data-id={comment.id}>删除</a>
                </div>
                <p className="user"><span >{comment.userName}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}