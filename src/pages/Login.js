

import { Button, Checkbox, Form, Input, message } from 'antd';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { checkEmail } from './checkEmail';


function Login({ user }) {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate()
  const [data, setData] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;
      if (user && user.multiFactor) {
        localStorage.setItem('avtUser', user.multiFactor?.user?.photoURL ?? '')
        localStorage.setItem('isLogin', true)
      }
      navigate('/')
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleLogin = () => {
    if (email !== '' || password !== '') {
      if (checkEmail(email, password, 'login')) {
        messageApi.open({
          type: 'success',
          content: 'Login Success',
        });
        localStorage.setItem('isLogin', true)
        setTimeout(() => {
          navigate('/')
        }, 1000);
      } else {
        messageApi.open({
          type: 'error',
          content: 'Login Failure',
        });
      }
    } else {
      messageApi.open({
        type: 'warning',
        content: 'Please enter a values!',
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
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div><h1 className='phong'>Login  </h1></div>
          <Form.Item

            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input type='email' onChange={(e) => setEmail(e.target.value)} />

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
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <div className='loginA'>
              <Checkbox className="ad">Remember me</Checkbox>
              <li><Link to='/register'>Don't have account ?</Link></li>
            </div>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button style={{ marginRight: 20 }} type="primary" onClick={() => handleLogin()}>
              Login
            </Button>

            <Button type="primary" onClick={() => handleGoogleLogin()}>
              Google
            </Button>


          </Form.Item>
        </Form>
      </div>
    </div>
  );

}

export default Login