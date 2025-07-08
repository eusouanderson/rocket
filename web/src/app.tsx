import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Button } from './components/ui/button'
import { CreateRoom } from './pages/create-room'
import { Room } from './pages/room'


const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<CreateRoom />} index path="/" />
          <Route element={<Room />} path="/room/:roomId" />
        </Routes>
        <Button>Click Me</Button>
      </div>
    </BrowserRouter>
    </QueryClientProvider>
  )
}
