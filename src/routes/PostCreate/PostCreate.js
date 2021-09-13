import { Form, Input, Button, Switch, Typography } from 'antd'
import { useLogin } from '../../hooks/useLogin'
import { useCallback } from 'react'

export const PostCreate = () => {
  const { userId } = useLogin()

  // create post for the logged user
  const { mutate: createPost } = {}

  const submitForm = useCallback((values) => {
    console.log(`values: `, values)
    createPost()
  }, [createPost])

  return (
    <>
      <Typography.Title level={2}>Create post</Typography.Title>

      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={submitForm}
        initialValues={{
          publish: true,
          featured: false,
          creatorId: userId,
        }}
      >
        <Form.Item name="creatorId" hidden>
          <Input />
        </Form.Item>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Title is required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: 'Content is required' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Featured" valuePropName="checked" name="featured">
          <Switch />
        </Form.Item>
        <Form.Item label="Publish" valuePropName="checked" name="publish">
          <Switch />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
