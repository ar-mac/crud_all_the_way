import { DislikeOutlined, LikeOutlined } from '@ant-design/icons'
import { Statistic } from 'antd'
import { useCallback } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import axios from '../../api/axios'

export const PostRating = ({ postId }) => {
  // fetch data for post
  const queryClient = useQueryClient()
  const { data: postData, isLoading: isPostLoading } = useQuery(
    ['posts', postId],
    ({ queryKey }) => axios.get(`/posts/${queryKey[1]}`)
  )

  const { mutate: editPost } = useMutation(
    (params) => axios.put(`/posts/${postId}`, params),
    {
      onSuccess: () => {
        queryClient.refetchQueries(['posts', postId])
      },
    }
  )

  const likePost = useCallback(() => {
    editPost({ ...postData.data, rating: postData.data.rating + 1 })
    //  like post
  }, [editPost, postData.data])

  const dislikePost = useCallback(() => {
    editPost({ ...postData.data, rating: postData.data.rating - 1 })
    //  dislike post
  }, [editPost, postData.data])

  return (
    <Statistic
      title="rating"
      loading={isPostLoading}
      value={postData?.data?.rating}
      prefix={<LikeOutlined onClick={likePost} />}
      suffix={<DislikeOutlined onClick={dislikePost} />}
    />
  )
}
