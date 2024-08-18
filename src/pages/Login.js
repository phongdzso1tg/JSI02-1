//  import React from 'react'

// //       function Login() {
// //    return (
// //      <div>Login</div>
// //    )
// //  };

// // export default Login

// // import React from 'react'

// // export const Login = () => {
// //   return (
// //     <div>Login</div>
// //   )
// // }

// // import React from 'react' 

// // function Login () {
// //  const sum = (a,b) => a + b
// //  console.log(sum(5,5))

// //     return (

// //         <div>Login</div>
// //     )
// // }
// // export default Login

// // import React, { useState } from 'react' 

// // function Login ({abc}) {
// //     return (
// //         <div>{abc}</div>
// //     )
// // }
// // export default Login

// // function Login({user}) {
// //     const [age, setAge] = useState(1)

// //     return(

// //         <div>

// //          <div>{age}</div>
// //          <button onClick={() => setAge(age + 1)}>Btn</button>
// //         </div>

// //     )
// // }
// // export default Login


// // function Login({user}) {
// //     const [date, setData] = useState()
    

// //     useEffect(() => {console.log(user)},[])

// //  return(
// //     <div>
// //         <div>{}</div>
// //         <button onClick={() => setAge(age + 5)}>Btn</button>
// //     </div>
// //  )

// // }

// // export default Login

import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Content } from 'antd/es/layout/layout';
import './login.css'


function Login({ user }) {
    const [data, setData] = useState()

    const getApi = async () => {
        const url = 'https://covid-193.p.rapidapi.com/statistics';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c5578c00c3mshc8fc39cff39344fp1489bcjsnc77c1abf2807',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log("🤔🤔🤔 ~ getApi ~ result:", result)
            setData(result.response)
        } catch (error) {
            console.error(error);
        }
    }

    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    useEffect(() => {
        getApi()
    }, [])

    console.log("🤔🤔🤔 ~ useEffect ~ data:", data)

    const handleGoogleLogin = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().signInWithPopup(provider);
        } catch (error) {
            console.log(error.message);
        }
    }
    const handleEmailLogin = async (values) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(values.email, values.password);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
      <div className='skibidi' style={{paddingLeft:370,paddingBottom:200,
      paddingTop:220 }}>
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
    onFinish={handleEmailLogin}
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
      <Input />
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
      <Input.Password />
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
       <li><a  href="register">Don't have account ?</a></li>
      </div>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>

      <Button type="primary" style={{margin:20}} onClick={handleGoogleLogin} >
        Google
      </Button>
      
      
    </Form.Item>
  </Form>
  </div>
  </div>
);

}

export default Login