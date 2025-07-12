import { useQuery } from '@tanstack/react-query';
import { dayjs } from '@/lib/dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

dayjs.extend(relativeTime);

interface Room {
  id: string;
  name: string;
  questionsCount: number;
  createAt: string;
}

export function RoomList() {
  const { data, isLoading, error } = useQuery<Room[]>({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms');
      if (!response.ok) {
        throw new Error('Failed to fetch rooms');
      }
      return response.json();
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>Acesso rápido para salas criadas recentemente</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        {isLoading && <p className="text-muted-foreground text-sm">Carregando salas...</p>}

        {error && (
          <p className="text-destructive text-sm">Erro ao carregar salas. Tente novamente.</p>
        )}

        {!isLoading && !error && data?.length === 0 && (
          <p className="text-muted-foreground text-sm">Nenhuma sala encontrada</p>
        )}

        {data?.map((room) => (
          <Link
            key={room.id}
            to={`/rooms/${room.id}`}
            className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50 transition-colors"
          >
            <div className="flex flex-1 flex-col gap-1">
              <h3 className="font-medium">{room.name}</h3>

              <div className="flex items-center gap-2">
                <Badge className="text-xs" variant="secondary">
                  Criada {dayjs(room.createAt).fromNow(true)} atrás
                </Badge>

                <Badge className="text-xs" variant="secondary">
                  {room.questionsCount} pergunta{room.questionsCount !== 1 ? 's' : ''}
                </Badge>
              </div>
            </div>

            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              Entrar <ArrowRight className="size-3" />
            </span>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
