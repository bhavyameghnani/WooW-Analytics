import React from 'react';
import 'antd/dist/antd.css';
import MainFeaturedPost from '../LandingPage/MainFeaturedPost';
import Header from '../LandingPage/Header';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import {
  Form,
  Select,
  Input,
  InputNumber,
  Card,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col
} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };

const { TextArea } = Input;
const { Option } = Select;
const normFile = (e) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };

const sections = [
{ title: 'Quick Search', url: '#/home' },
{ title: 'Employee Profile', url: '#/home' },
{ title: 'Projects Dashboard', url: '#/home' },
];
  
const ProjectForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
      return (
        <React.Fragment>
        <CssBaseline />     
        {/* <header className="App-header"> */}
         <Container maxWidth="lg">
          <Header title="WooW Analytics" sections={sections} />
          <main>
            <Card style={{backgroundColor: "white"}} title="Add a Project">

          <Form
          name="project_form"
            {...formItemLayout}
            onFinish={onFinish}
            size = "large"
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please enter your project tile!' }]}
                >
                    <Input/>

                </Form.Item>

                <Form.Item
                    label="Brief Description"
                    name="desc"
                >
                   <TextArea rows={4} />

                </Form.Item>
                <Form.Item
                    name="domain"
                    label="Domain"
                    rules={[
                    {
                        required: true,
                        message: 'Please select project domain!',
                        type: 'array',
                    },
                    ]}
                >
                    <Select mode="multiple" placeholder="Please Select Relevant Domains">
                        <Option value="ML">Machine Learning</Option>
                        <Option value="IOT">IOT</Option>
                        <Option value="Mobile Application">Mobile Application</Option>
                        <Option value="Web Application">Web Application</Option>
                        <Option value="Computer Vision">Computer Vision</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="technostack"
                    label="Technology Stack"
                    rules={[
                    {
                        required: true,
                        message: 'Tech Stack is compulsory field!',
                        type: 'array',
                    },
                    ]}
                >
                    <Select mode="multiple" placeholder="Proposed technology stack for the project.">
                        <Option value="Java">Java</Option>
                        <Option value="Python">Python</Option>
                        <Option value="Android">Android</Option>
                        <Option value="ReactJs">ReactJs</Option>
                        <Option value="React Native">React Native</Option>
                        <Option value="HTML">HTML</Option>
                        <Option value="CSS">CSS</Option>
                        <Option value="Javascript">Javascript</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Estimated Hours">
                    <Form.Item name="hours" noStyle>
                    <InputNumber min={1} max={100} />
                    </Form.Item>
                    <span className="ant-form-text"> hours</span>
                </Form.Item>

                <Form.Item name="complexity" label="Complexity">
                    <Slider
                    marks={{
                        0: 'LEVEL 1',
                        20: 'LEVEL 2',
                        50: 'LEVEL 3',
                        80: 'LEVEL 4',
                        100: 'LEVEL 5',
                    }}
                    />
                </Form.Item>
                <Form.Item
                    name="team"
                    label="Team Info"
                    rules={[
                    {
                
                        type: 'array',
                    },
                    ]}
                >
                    <Select mode="multiple" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Add Team Info..">
                        <Option value="Bhavya">Bhavya</Option>
                        <Option value="Anshu">Anshu</Option>
                        <Option value="Devang">Devang</Option>
                        <Option value="Darshan">Darshan</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Project Thumbnail">
                    <Form.Item name="image" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                    <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    </Upload.Dragger>
                    </Form.Item>
                </Form.Item>

                <Form.Item
                    name="supportDocs"
                    label="Additional Documents"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra="Extra info about the project"
                >
                    <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                    span: 12,
                    offset: 6,
                    }}
                >
                    
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                
          </Form>
                </Card>
        </main>
        </Container>
      <br/>
    </React.Fragment> 
      );
}

export default ProjectForm 