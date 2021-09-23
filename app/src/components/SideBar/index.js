import React from 'react'
import {Button, Menu, Typography, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons'
import './style.css'
import icon2 from '../../images/logo.png'

function SideBar({sideOpen ,toggle}) {
    let classNameOption;
    if(sideOpen) {
        classNameOption = "sidebar"
    } else {
        classNameOption = "sidebar sidebaar-close"
    }
    
    return (
        <div className={classNameOption}>
        <div className="nav-logo-container sidebar-navbrand">
            <Avatar src={icon2} size="" />
            <Typography.Title level={2} className="logo">
                <Link to="/">CryptoCoin</Link>
            </Typography.Title>
            
        </div>
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/" onClick={toggle}>Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies" onClick={toggle}>Crypto Currencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges" onClick={toggle}>Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news" onClick={toggle}>News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default SideBar
