import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      const user = response.data.find(
        (user) => user.username === values.username && user.password === values.password
      );

      if (user) {
        dispatch(login(user));
        navigate('/dashboard/students');
      } else {
        message.error('Invalid username or password');
      }
    } catch (error) {
      message.error('Failed to login');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', paddingTop: '100px' }}>
        <h1 style={{color:'white'}}>Login

        </h1>
      <Form name="loginForm" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Iltimos Username kiriting !' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Iltimos passwordni kiriting !' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button style={{marginTop:"10px", marginLeft:'230px',backgroundColor:'aqua'}} type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
