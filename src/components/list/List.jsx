import React, { Component } from 'react'
import pubsub from 'pubsub-js'

import Item from '../item/Item'

export default class List extends Component {
    state = {
        isFirst: true,
        isLoad: false,
        userData: [],
        errMsg: ''
    }

    componentDidMount() {
        // 订阅Search 发布的状态
        pubsub.subscribe('upListState',(msg,{isFirst,isLoad,userData,errMsg})=>{
            // 维护状态
            this.setState({
                isFirst,
                isLoad,
                userData,
                errMsg
            })
        })
    }

    render() {
        let { isFirst, isLoad, userData, errMsg } = this.state;
        if (isFirst) {
            return <h3>请输入搜索信息进行搜索</h3>
        } else if (isLoad) {
            return <h3>loading...</h3>
        } else if (errMsg) {
            return <h3>{errMsg}</h3>
        } else if(userData.length<=0) {
            return <h3>用户不存在</h3>
        } else {
            return (
                <div className="row">
                    {
                        userData.map((item) => {
                            return <Item key={item.id} {...item} />
                        })
                    }
                </div>
            )
        }
    }
}
