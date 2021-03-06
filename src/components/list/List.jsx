import React, { Component } from 'react'
import Item from '../item/Item'
import './List.css'

export default class List extends Component {
    render() {
        let {comment,delateStateComment} = this.props;
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display:'none'}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comment.map((item,index)=>{

                            return <Item comment={item} key={item.id} delateStateComment={delateStateComment}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}