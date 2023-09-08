import tw from 'twin.macro'

type PropsType = {
  children: React.ReactNode
}

const HomeContainer = ({ children }: PropsType) => {
  return (
    <div css={[tw`flex h-screen flex-col items-center justify-center`]}>
      {children}
    </div>
  )
}

export default HomeContainer
