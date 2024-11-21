"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Edit, MoreHorizontal, Trash } from "lucide-react";

const vendas = [
  {
    id: "1",
    code: "VEN001",
    client: "João Silva",
    date: "2024-07-26",
    total: 1500.00,
    status: "Concluída",
  },
  {
    id: "2",
    code: "VEN002",
    client: "Maria Pereira",
    date: "2024-07-27",
    total: 800.00,
    status: "Aguardando Pagamento",
  },
  {
    id: "3",
    code: "VEN003",
    client: "Pedro Santos",
    date: "2024-07-28",
    total: 2500.00,
    status: "Concluída",
  },
  {
    id: "4",
    code: "VEN004",
    client: "Ana Oliveira",
    date: "2024-07-29",
    total: 1200.00,
    status: "Cancelada",
  },
];

export function VendasContent() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Código</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Data</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vendas.map((venda) => (
            <TableRow key={venda.id}>
              <TableCell className="font-medium">{venda.code}</TableCell>
              <TableCell>{venda.client}</TableCell>
              <TableCell>{venda.date}</TableCell>
              <TableCell className="text-right">
                {venda.total.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </TableCell>
              <TableCell>
                <Badge variant={
                  venda.status === 'Concluída' ? 'default' :
                  venda.status === 'Cancelada' ? 'destructive' :
                  'warning'
                }>
                  {venda.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Abrir menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash className="h-4 w-4 mr-2" />
                      Excluir
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
