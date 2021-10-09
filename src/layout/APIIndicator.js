export const APIIndicator = () => {
  // replace false with a way to detect loading and mutating queries

  const stats = {
    loadingPosts: false,
    loadingUsers: false,
    mutatingPosts: false,
    mutatingUsers: false,
  }
  console.log(`stats: `, stats)
  return (
    <div className="api-indicator">
      {stats.loadingPosts && 'Loading posts'}
      {stats.loadingUsers && 'Loading users'}
      {stats.mutatingPosts && 'Mutating posts'}
      {stats.mutatingUsers && 'Mutating users'}
    </div>
  )
}
