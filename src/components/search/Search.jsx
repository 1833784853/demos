import React, { Component } from 'react'
import axios from 'axios'
import pubsub from 'pubsub-js'
export default class Search extends Component {

    search = async () => {
        let keyWord = this.refs.keyWord.value.trim();
        // 发送ajax请求
        const url = `https://api.github.com/search/users?q=${keyWord}`;
        // 发布，loading状态
        pubsub.publish('upListState', {
            isFirst: false, // 初始化
            isLoad: true, // 是否显示loading
            userData: [], // 存储请求回来的数据
            errMsg: '' // 错误信息
        })
        try {
            let result = await axios.get(url); // 等待ajax
            // 过滤掉不需要的信息
            let userData = result.data.items.map((item) => {
                // 返回一个对象
                return {
                    id: item.id,
                    login: item.login, // 用户名
                    avatar_url: item.avatar_url, // 头像
                    html_url: item.html_url  // html地址
                }
            })
            // 发布，状态成功
            pubsub.publish('upListState', {
                isFirst: false,
                isLoad: false,
                userData,
                errMsg: ''
            })
        } catch (err) {
            // 发布，状态失败
            pubsub.publish('upListState', {
                isFirst: false,
                isLoad: false,
                userData: [],
                errMsg: err.toString()
            })
        }
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref="keyWord" />
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}