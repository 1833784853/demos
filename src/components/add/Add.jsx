import React, { Component } from 'react'

export default class Add extends Component {
    clickAdd = ()=>{
        // 获取改变状态的方法
        let {upStateComment} = this.props;
        let userName = this.refs.userName.value;
        let content = this.refs.content.value;
        // 整理成一个对象
        let data = {
            userName,
            content
        }
        upStateComment(data);
    }
    render() {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" ref='userName' />
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" ref='content'></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.clickAdd}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}