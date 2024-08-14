import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { login, signup } from "../actions/authentication.js";
import './login.css'; // Import the CSS module

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [form] = Form.useForm();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const onSubmit = (formValues) => {

    const values = form.getFieldsValue();

    if (!isLogin && values.password !== values.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try{
      if (isLogin) {
         dispatch(login(values, navigate));
      } else {
        dispatch(signup(values, navigate));
      }
      if (values.isEmployer) {
        navigate("/employerBoard"); // Redirect to employer dashboard
      } else {
        navigate("/candidateBoard"); // Redirect to candidate dashboard
      }
    
      setError('');
    } catch (error) {
      setError(error.response.data.message || 'An error occurred');
    }
    form.resetFields();
    setError('');
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  return (
    <div id="container-login">
      <div id="title">
        <i className="material-icons lock">{isLogin ? 'lock' : 'person_add'}</i> 
        {isLogin ? 'Login' : 'Sign Up'}
      </div>

      <Form onFinish={onSubmit}>

        {/* Username Field */}
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Name" />
        </Form.Item>

        {/* Email Field (only for signup) */}
        {!isLogin && (
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
        )}

        {/* Password Field */}
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        {/* Confirm Password Field (only for signup) */}
        {!isLogin && (
          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: 'Please confirm your Password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
          </Form.Item>
        )}

        {/* Role Selection (only for signup) */}
        {!isLogin && (
          <Form.Item
            name="role"
            rules={[{ required: true, message: 'Please select your role!' }]}
          >
            <Checkbox.Group>
              <Checkbox value="candidate">Candidate</Checkbox>
              <Checkbox value="employer">Employer</Checkbox>
            </Checkbox.Group>
          </Form.Item>
        )}

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            {isLogin ? 'Log In' : 'Sign Up'}
          </Button>
        </Form.Item>
      </Form>

      <div className="switch-mode">
        {isLogin ? "Don't have an account?" : 'Already have an account?'} 
        <Button type="link" onClick={switchMode}>
          {isLogin ? 'Sign Up' : 'Login'}
        </Button>
      </div>
      {/* Display Error Message */}
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
    </div>
  );
};

export default Login;




