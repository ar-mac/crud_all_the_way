import { List, Typography } from 'antd'
import { Link } from '@reach/router'

export const UserObservedPosts = ({ userId }) => {
  // fetch posts observed by userId
  const { data, isLoading } = {}

  return (
    <>
      <Typography.Title level={3}>Observed posts</Typography.Title>
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
