import { InputNumber, List, Space, Spin, Typography } from 'antd'
import { Link } from '@reach/router'
import { useGetFilteredUsers } from '../../api/users'
import { useEffect, useState } from 'react'
import { useDebounce } from 'react-use'

const isFeatured = true

export const FeaturedUsers = () => {
  const [_limit, _setLimit] = useState(3)
  // fetch users filtered by isFeatured = true and limit to 3
  const { data, isLoading, isFetching, refetch } = useGetFilteredUsers({
    params: { isFeatured, _limit },
    enabled: false,
    keepPreviousData: true,
  })

  const [, cancel] = useDebounce(
    () => refetch(),
    500,
    [_limit]
  )

  useEffect(() => {
    cancel()
    refetch()
  }, [cancel, refetch])

  return (
    <>
      <Typography.Title level={2}>Featured Users</Typography.Title>
      <Space>
        <InputNumber min={1} max={50} value={_limit} onChange={_setLimit} />
        {isFetching && <Spin size="small" />}
      </Space>
      <List
        loading={isLoading}
        itemLayout="horizontal"
        dataSource={data?.users}
        renderItem={(item) => (
          <List.Item>
            <Link to={`/users/${item.id}`}>{item.name}</Link>
          </List.Item>
        )}
      />
    </>
  )
}
