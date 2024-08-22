import { Button, Checkbox, Form, Input, message } from 'antd';
import 'firebase/compat/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import { checkEmail } from './checkEmail';
export const Register = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPw, setConfirmPw] = useState()

    const handleRegister = () => {
        let dataAccoount = JSON.parse(localStorage.getItem('account'));

        if (email !== '' || password !== '' || confirmPw !== '') {
            if (checkEmail(email)) {
                messageApi.open({
                    type: 'warning',
                    content: 'Email already exists !',
                });
            } else {
                if (password === confirmPw) {
                    dataAccoount.push({
                        id: dataAccoount.length + 1,
                        email: email,
                        password: password
                    })
                    localStorage.setItem('account', JSON.stringify(dataAccoount))
                    messageApi.open({
                        type: 'success',
                        content: 'Register success',
                    });
                    setTimeout(() => {
                        navigate('/login')
                    }, 1000);
                } else {
                    messageApi.open({
                        type: 'error',
                        content: 'Confirm Password Failed',
                    });
                }
            }
        } else {
            messageApi.open({
                type: 'error',
                content: 'Please Enter Email and Password!',
            });
        }
    }

    return (
        <div className='skibidi' style={{
            paddingLeft: 370, paddingBottom: 200,
            paddingTop: 220
        }}>
            {contextHolder}

            <div className='alo'>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                > <div><h1 className='phong'> Register   </h1></div>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input onChange={(e) => setEmail(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password onChange={(e) => setPassword(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input type='password' onChange={(e) => setConfirmPw(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,

                        }}
                    >
                        <Button type="primary" style={{ marginRight: 10 }} onClick={() => handleRegister()}>
                            Register
                        </Button>

                        <Link to='/login'  >
                            Login
                        </Link>



                    </Form.Item>

                </Form>
            </div>
        </div>
    )
}