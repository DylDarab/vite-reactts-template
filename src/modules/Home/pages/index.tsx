import useGetUsers from '@/hooks/useGetUsers'
import HomeContainer from '../components/HomeContainer'

const Home = () => {
  const { data } = useGetUsers()

  return <HomeContainer>Hello World</HomeContainer>
}

export default Home
