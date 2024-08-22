import React from 'react';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { HomeOutlined, LoginOutlined } from '@ant-design/icons';
import { ShoppingOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { BulbOutlined } from '@ant-design/icons';
import { SkinOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Avatar, Card } from 'antd';

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';



const HeaderApp = () => {
    const navigate = useNavigate()
    const avtUser = localStorage.getItem('avtUser')
    const isLogin = localStorage.getItem('isLogin')
    const { Meta } = Card;


    const { Header } = Layout;
    const contentStyle = {
        height: '590px',
        color: 'white',
        lineHeight: '590px',
        textAlign: 'center',
        background: 'white',


    };
    const items = [

        {
            key: '',
            label: 'Home',
            icon: <HomeOutlined />,

        },
        {
            key: 'about',
            label: 'About',
            icon: <BulbOutlined />
        },
        {
            key: 'storge',
            label: 'Storge',
            icon: <ShoppingOutlined />
        },
        {
            key: 'products',
            label: 'Products',
            icon: <SkinOutlined />,

        },
        avtUser &&
        {
            disabled: true,
            className: 'menu-avt',
            icon: <img style={{ width: 32, height: 32 }} src={avtUser} />
        },
        !isLogin ?
            {
                key: 'login',
                label: 'Login'
            } : {
                key: 'logout',
                label: 'Logout',
                icon: <LoginOutlined style={{
                    fontSize: '18px',
                    fontWeight: '900',
                }} />
            },

    ]

    const onclick = (e) => {
        if (e?.key === 'logout') {
            localStorage.removeItem('isLogin')
            localStorage.removeItem('avtUser')
            return window.location.reload()
        }
        navigate(`/${e?.key}`)

    }
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (

        <Layout>
            <Header

                style={{
                    display: 'flex',
                    alignItems: 'center',

                }}
            >

                <div className="demo-logo" />

                <Menu
                    theme="dark"
                    mode="horizontal"

                    defaultSelectedKeys={['2']}
                    items={items}
                    onClick={onclick}
                    style={{
                        flex: 1,
                        minWidth: 0,

                    }}
                />

            </Header>



        </Layout>




    );
};

export default HeaderApp;
