import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

type GetRoomsAPIResponse = Array<{
  id: string
  name: string
}>

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const result: GetRoomsAPIResponse = await response.json()

      return result
    },
  })

  return (
    <div>
      <div>CreateRoom</div>
      {isLoading && <div>Loading...</div>}

      <div className="flex flex-col gap-1">
        {data?.map((room) => {
          return (
            <Link
              aria-label={`Join room: ${room.name}`}
              className='rounded bg-black p-2 text-white hover:bg-slate-800'
              data-testid={`room-link-${room.id}`}
              key={room.id}
              state={{ roomName: room.name }}
              title={`Join room: ${room.name}`}
              to={`/room/${room.id}`}
            >
              {room.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
