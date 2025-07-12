import { RoomList } from '@/components/room-list';

export function CreateRoom() {
  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto max-w-4xl py-8">
        <div className="grid grid-cols-2 items-start gap-8">
          <div />
          <RoomList />
        </div>
      </div>
    </div>
  );
}
