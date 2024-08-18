import React from 'react';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { ShoppingOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { BulbOutlined } from '@ant-design/icons';
import { SkinOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import {Avatar, Card } from 'antd';

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;


const { Header} = Layout;


const HeaderApp = () => {
    const navigate = useNavigate()
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
        {
            key: 'login',
            label: 'Login',
            icon: <UserOutlined />
        },

    ]
    
    const onclick = (e) => {
        navigate(`/${e.key}`)
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
