import { List, Typography } from 'antd'
import { Link } from '@reach/router'

export const UserCreatedPosts = ({ userId }) => {
  // fetch posts created by userId
  const { data, isLoading } = {}

  return (
    <>
      <Typography.Title level={3}>Created posts</Typography.Title>
      <List
        loading={isLoading}
        itemLayout="horizontal"
        dataSource={data?.posts}
        renderItem={(post) => (
          <List.Item>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </List.Item>
        )}
      />
    </>
  )
}
