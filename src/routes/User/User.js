import { Col, Divider, Row, Tag, Typography } from 'antd'
import { Link } from '@reach/router'
import { LoadingSpinner } from '../../shared/LoadingSpinner'
import { useLogin } from '../../hooks/useLogin'
import { UserCreatedPosts } from './UserCreatedPosts'
import { UserObservedPosts } from './UserObservedPosts'

export const User = ({ userId }) => {
  const { isLoggedUser } = useLogin()
  // fetch data for userId
  const { data: userData, isLoading: isUserLoading } = {}

  if (isUserLoading) {
    return <LoadingSpinner />
  }

  // temporary
  const user = userData?.user || {
    name: 'Miyazaki',
    gender: 'Male',
    isFeatured: true,
    email: 'h.miyazaki@ghibli.com',
  }

  return (
    <>
      <Row gutter={16} align="middle" justify="space-between">
        <Col>
          <Typography.Title level={2}>
            {user.gender === 'Male' ? 'Mr ' : 'Mrs '}
            {user.name}
          </Typography.Title>
        </Col>
        {user.isFeatured && (
          <Col flex="1" style={{ alignSelf: 'flex-start' }}>
            <Tag color="green">Featured user</Tag>
          </Col>
        )}
        {isLoggedUser(userId) && (
          <Col>
            <Link to={`/posts/create`}>Create New Post</Link>
          </Col>
        )}
      </Row>
      <Typography.Text>{user.email}</Typography.Text>

      <Divider />
      <UserCreatedPosts userId={userId} />

      <Divider />
      <UserObservedPosts userId={userId} />
    </>
  )
}
