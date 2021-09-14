import { List, Typography } from 'antd'
import { Link } from '@reach/router'
import { useGetFilteredUsers } from '../../api/users'

const isFeatured = true
const limit = 3

export const FeaturedUsers = () => {
  // fetch users filtered by isFeatured = true and limit to 3

  const { data, isLoading } = useGetFilteredUsers({
    params: { isFeatured, limit },
  })

  // const { data, isLoading } = useQuery(
  //   ['users', { isFeatured, limit }],
  //   () => axios.get(`/users?isFeatured=${isFeatured}&_limit=${limit}`),
  //   {
  //     select: (data) => ({ users: data.data }),
  //   }
  // )

  return (
    <>
      <Typography.Title level={2}>Featured Users</Typography.Title>
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
