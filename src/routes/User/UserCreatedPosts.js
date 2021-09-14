import { List, Typography } from 'antd'
import { Link } from '@reach/router'
import { useGetUserPosts } from '../../api/posts'

export const UserCreatedPosts = ({ userId }) => {
  // fetch posts created by userId
  const { data, isLoading } = useGetUserPosts({ userId })

  // const { data, isLoading } = useQuery(
  //   ['userPosts', { userId }],
  //   ({ queryKey: [_, param] }) => axios.get(`/users/${param.userId}/posts`),
  //   { select: (data) => ({ posts: data.data }) }
  // )

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
