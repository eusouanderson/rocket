import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { dayjs } from "@/lib/dayjs";

type GetRoomsAPIResponse = Array<{
  id: string;
  name: string;
  questionsCount: number;
  createAt: string;
}>;

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const result: GetRoomsAPIResponse = await response.json();
      return result;
    },
  });

  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto max-w-4xl py-8">
        <div className="grid grid-cols-2 items-start gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Salas recentes</CardTitle>
              <CardDescription>
                Acesso rápido para as salas criadas recentemente
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {isLoading && (
                <p className="text-muted-foreground text-sm text-zinc-900">
                  Carregando salas...
                </p>
              )}
              {data?.map((room) => {
                return (
                  <Link
                    className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50"
                    key={room.id}
                    to={`/rooms/${room.id}`}
                  >
                    <div className="flex flex-1 flex-col gap-1">
                      <h3 className="font-medium">{room.name}</h3>

                      <div className="flex items-center gap-2">
                        <Badge className="text-xs" variant="secondary">
                          {dayjs(room.createAt).toNow()} pergunta(s)
                        </Badge>
                        <Badge className="text-xs" variant="secondary">
                          {room.questionsCount} pergunta(s)
                        </Badge>
                      </div>
                    </div>

                    <span className="flex items-center gap-1 text-sm">
                      Entrar <ArrowRight className="size3" />
                    </span>
                  </Link>
                );
              })}
              {/* Conteúdo da sala aqui */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
