import { Navigate, useParams } from 'react-router-dom'

type RoomParams = {
  roomId: string
}

export function Room() {
  const parans = useParams<RoomParams>()

  if (!parans.roomId) {
    return <Navigate replace to="/" />
  }

  return <div> Room Details {JSON.stringify(parans)} </div>
}
