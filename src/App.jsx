import React, { Component } from 'react'
import Add from './components/add/Add'
import List from './components/list/List'
export default class App extends Component {
    state = {
        comment: [
            {
                id: 1,
                userName: '小红',
                content: '哈哈哈哈哈哈'
            },
        ]
    }
    // 改变state里的comment内容
    upStateComment = (data) => {
        // clone 状态里的comment 到一个新数组
        let comment = [...this.state.comment];
        // 给传递过来的包加id
        data.id = comment.length + 1;
        comment.unshift(data)

        this.setState({ comment: comment });
    }
    delateStateComment = (id) => {
        let comment = [...this.state.comment];
        let newComment = [];
        comment.reduce((pre, now) => {
            if (now.id !== id) {
                return newComment.push(now)
            }
        },'');
        this.setState({comment:newComment});
    }
    render() {
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add upStateComment={this.upStateComment} />
                    <List comment={this.state.comment} delateStateComment={this.delateStateComment} />
                </div>
            </div>
        )
    }
}