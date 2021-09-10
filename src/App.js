import './App.css'
import { Router } from '@reach/router'

const Comp = () => {
  return <div>Comp</div>
}

function App() {
  return (
    <Router>
      <Comp path='/users' />
      <Comp path='/users/featured' />
      <Comp path='/users/:userId' />
      <Comp path='/users/:userId/posts' />
      <Comp path='/posts' />
      <Comp path='/posts/featured' />
      <Comp path='/posts/:postId' />
      <Comp path='/' />
    </Router>
  )
}

export default App
