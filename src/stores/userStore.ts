import Person from '@models/Person'
import create from 'zustand'

type UserStore = {
  user: Person
  setUser: (user: Person) => void
}

const useUserStore = create<UserStore>((set) => ({
  user: {
    id: '',
    name: '',
    username: '',
  },
  setUser: (user) => set({ user }),
}))
