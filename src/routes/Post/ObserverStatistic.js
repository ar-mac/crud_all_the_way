import { UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons'
import { Statistic } from 'antd'
import { useCallback } from 'react'
import { useLogin } from '../../hooks/useLogin'
import {
  getIsUserObservingPost,
  getObservationsCount,
  useGetObservationsForPost,
} from '../../api/observations'

export const ObserverStatistic = ({ postId }) => {
  const { userId } = useLogin()

  // fetch number of post observers
  const { data: observingData, isLoading: isObservingLoading } =
    useGetObservationsForPost({
      postId,
      selectors: {
        observationsLength: getObservationsCount,
        isObservingPost: (data) => getIsUserObservingPost(data, userId),
      },
    })

  const observePost = useCallback(() => {
    //  observe post
  }, [])

  const stopObservingPost = useCallback(() => {
    //  stop post
  }, [])

  const getPrefix = () => {
    if (isObservingLoading) {
      return null
    }

    if (observingData?.isObservingPost) {
      return <UserDeleteOutlined onClick={stopObservingPost} />
    }
    return <UserAddOutlined onClick={observePost} />
  }

  return (
    <Statistic
      title="# of observers"
      loading={isObservingLoading}
      value={observingData?.observationsLength}
      prefix={getPrefix()}
    />
  )
}
