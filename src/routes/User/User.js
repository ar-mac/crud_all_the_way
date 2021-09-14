import { Col, Divider, Row, Tag, Typography } from 'antd'
import { Link } from '@reach/router'
import { LoadingSpinner } from '../../shared/LoadingSpinner'
import { useLogin } from '../../hooks/useLogin'
import { UserCreatedPosts } from './UserCreatedPosts'
import { UserObservedPosts } from './UserObservedPosts'
import { useGetUser } from '../../api/users'

export const User = ({ userId }) => {
  const { isLoggedUser } = useLogin()
  // fetch data for userId

  const { data, isLoading, isError } = useGetUser({ userId })
  // const { data, isLoading, isError } = useQuery(
  //   ['users', userId],
  //   ({ queryKey }) => axios.get(`/users/${queryKey[1]}`)
  // )

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <div>Is Error</div>
  }

  const { user } = data

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
