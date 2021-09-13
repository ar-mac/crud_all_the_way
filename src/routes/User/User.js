import { Col, Divider, List, Row, Typography } from 'antd'
import { Link } from '@reach/router'
import { LoadingSpinner } from '../../shared/LoadingSpinner'
import { useLogin } from '../../hooks/useLogin'

export const User = ({ userId }) => {
  const { isLoggedUser } = useLogin()
  // fetch data for userId
  const { data: userData, isLoading: isUserLoading } = {}

  // fetch posts created by userId
  const { data: userPosts, isLoading: postsIsLoading } = {}

  // fetch posts observed by userId
  const { data: userObservedPosts, isLoading: observedPostsIsLoading } = {}

  if (isUserLoading) {
    return <LoadingSpinner />
  }

  // temporary
  const user = userData?.user || { name: 'Miyazaki' }

  return (
    <>
      <Row align="middle" justify="space-between">
        <Col>
          <Typography.Title level={2}>{user.name}</Typography.Title>
        </Col>
        {isLoggedUser(userId) && (
          <Col>
            <Link to={`/posts/create`}>Create New Post</Link>
          </Col>
        )}
      </Row>
      <Divider />
      <Typography.Title level={3}>Created posts</Typography.Title>
      <List
        loading={postsIsLoading}
        itemLayout="horizontal"
        dataSource={userPosts?.posts}
        renderItem={(post) => (
          <List.Item>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </List.Item>
        )}
      />

      <Divider />
      <Typography.Title level={3}>Observed posts</Typography.Title>
      <List
        loading={observedPostsIsLoading}
        itemLayout="horizontal"
        dataSource={userObservedPosts?.posts}
        renderItem={(post) => (
          <List.Item>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </List.Item>
        )}
      />
    </>
  )
}
