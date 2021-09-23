import React from 'react'
import {Button, Menu, Typography, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons'
import icon from '../../images/logo.png'
import icon2 from '../../images/logo2.png'
import './style.css';
function NavBar({sideBarToggle, toggle}) {
    return (
        <div className="nav-container">
            <div className="nav-logo-container">
                <Avatar src={icon} size="" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">CryptoCoin</Link>
                </Typography.Title>
                <Button  className="menu-control-container" onClick={toggle}>
                    <MenuOutlined />
                </Button>
            </div>
            <div className="nav-desktop">
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to="/cryptocurrencies">Crypto Currencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    )
}

export default NavBar
