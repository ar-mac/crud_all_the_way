import { DislikeOutlined, LikeOutlined } from '@ant-design/icons'
import { Statistic } from 'antd'
import { useCallback } from 'react'

export const PostRating = () => {
  // fetch data for post
  const { data: postData, isLoading: isPostLoading } = {}

  const { mutate: editPost } = {}

  const likePost = useCallback(() => {
    editPost()
    //  like post
  }, [editPost])

  const dislikePost = useCallback(() => {
    editPost()
    //  dislike post
  }, [editPost])

  return (
    <Statistic
      title="rating"
      loading={isPostLoading}
      value={postData?.rating || -37}
      prefix={<LikeOutlined onClick={likePost} />}
      suffix={<DislikeOutlined onClick={dislikePost} />}
    />
  )
}
