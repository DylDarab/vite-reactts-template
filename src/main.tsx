import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import AppRoute from './AppRoute'
import React from 'react'
import ReactDOM from 'react-dom/client'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRoute />
    </QueryClientProvider>
  </React.StrictMode>
)
