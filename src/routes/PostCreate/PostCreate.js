import { Form, Input, Button, Switch, Typography } from 'antd'
import { useLogin } from '../../hooks/useLogin'
import { useCallback } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import axios from '../../api/axios'
import { fetchUserPosts } from '../../api/posts'
import { navigate } from '@reach/router'

export const PostCreate = () => {
  const { userId } = useLogin()

  const queryClient = useQueryClient()
  // create post for the logged user
  const { mutate: createPost } = useMutation(
    (params) => axios.post('/posts', params),
    {
      onSuccess: (response) => {
        console.log(`response: `, response)
        navigate(`/users/${userId}`)
        queryClient.prefetchQuery(['userPosts', { userId }], fetchUserPosts)
      },
    }
  )

  const submitForm = useCallback(
    (values) => {
      console.log(`values: `, values)
      createPost(values)
    },
    [createPost]
  )

  return (
    <>
      <Typography.Title level={2}>Create post</Typography.Title>

      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={submitForm}
        initialValues={{
          isPublished: true,
          isFeatured: false,
          userId: userId,
        }}
      >
        <Form.Item name="userId" hidden>
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
        <Form.Item label="Featured" valuePropName="checked" name="isFeatured">
          <Switch />
        </Form.Item>
        <Form.Item label="Publish" valuePropName="checked" name="isPublished">
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
