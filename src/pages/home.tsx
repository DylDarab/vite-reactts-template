import Button from '@/components/core/button'
import useGetUsers from '@/hooks/useGetUsers'

const home = () => {
  const { data } = useGetUsers()

  return (<Button onClick={() => console.log('hello')}>Hello</Button>)
}

export default home
