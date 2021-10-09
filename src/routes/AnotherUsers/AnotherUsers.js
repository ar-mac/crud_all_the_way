import { Col, List, Row, Space, Tag, Typography } from 'antd'
import { Link } from '@reach/router'
import { getUsersLength, useGetUsers } from '../../api/users'
import { useEffect } from 'react'

// eslint-disable-next-line no-unused-vars
const UsersCount = () => {
  const { data } = useGetUsers({ selectors: { usersCount: getUsersLength } })

  return <div>{data?.usersCount}</div>
}

export const AnotherUsers = () => {
  // user list
  const { data, isLoading, isSuccess } = useGetUsers({
    staleTime: Infinity,
    onSuccess: () => {
      console.log('Users loaded succesfully! (CALLBACK)')
    },
  })

  useEffect(() => {
    if (isSuccess) {
      console.log('Users loaded succesfully! (EFFECT)')
    }
  }, [isSuccess])

  return (
    <>
      <Typography.Title level={2}>ANOTHER Users</Typography.Title>
      <Row>
        <Col span={12} offset={6}>
          {/*<UsersCount />*/}

          <List
            loading={isLoading}
            itemLayout="horizontal"
            dataSource={data?.users}
            renderItem={(item) => (
              <List.Item>
                <Space>
                  <Link to={`/users/${item.id}`}>{item.name}</Link>
                  {item.isFeatured && <Tag color="blue">Featured</Tag>}
                </Space>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  )
}
