import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
    load = (e)=>{
        e.target.style.opacity = 1;
    }
    render() {
        let {html_url,avatar_url,login} =this.props
        return (
            <div className="card">
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                    <img src={avatar_url} style={{ width: '100px',opacity:'0',transition: 'all 1s' }} onLoad={this.load} alt='资源加载失败'/>
                </a>
                <p className="card-text">{login}</p>
            </div>
        )
    }
}