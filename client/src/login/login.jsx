import React from 'react';
import styles from './login.css'; // Import the CSS module
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Card, Typography } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useState } from "react";
import { login, signup } from "../actions/authentication.js";

const { Title } = Typography;

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

    try {
      if (isLogin) {
        dispatch(login(values, navigate));
      } else {
        dispatch(signup(values, navigate));
      }
      setError('');
    } catch (error) {
      setError(error.response.data.message);
    }

    form.resetFields();
    setError('');
  };

  const switchMode = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
    setError('');
  };

  return (
    <div className={styles.loginPage}>
      <Card
        className={styles.card}
        title={
          <Title level={4} style={{ textAlign: "center" }}>
            {isLogin ? "Login to" : "Join"}&nbsp; Job Find
          </Title>
        }
      >
        <Form
          name="authform"
          form={form}
          size="large"
          onFinish={onSubmit}
        >
          {!isLogin && (
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please enter your username",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
          )}
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input type="email" prefix={<MailOutlined />} placeholder="Email address" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          {!isLogin && (
            <Form.Item
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please repeat your password",
                },
              ]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
            </Form.Item>
          )}
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          <Form.Item>
            <Button htmlType="submit" type="primary" block>
              {isLogin ? "Log In" : "Join"}
            </Button>
            <span style={{ margin: "0 10px" }}>Or</span>
            <Button type="link" onClick={switchMode} block>
              {isLogin ? "Register Now" : "Have an account"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
