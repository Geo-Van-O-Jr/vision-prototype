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

const products = [
  {
    id: "1",
    code: "PRD001",
    name: "Notebook Dell Inspiron",
    category: "Eletrônicos",
    price: 4599.90,
    stock: 15,
    status: "Ativo",
  },
  {
    id: "2",
    code: "PRD002",
    name: "Monitor LG 24'",
    category: "Periféricos",
    price: 899.90,
    stock: 8,
    status: "Ativo",
  },
  {
    id: "3",
    code: "PRD003",
    name: "Teclado Mecânico",
    category: "Periféricos",
    price: 299.90,
    stock: 0,
    status: "Sem Estoque",
  },
  {
    id: "4",
    code: "PRD004",
    name: "Mouse Gamer",
    category: "Periféricos",
    price: 199.90,
    stock: 25,
    status: "Ativo",
  },
  {
    id: "5",
    code: "PRD005",
    name: "Smartphone Samsung",
    category: "Eletrônicos",
    price: 2499.90,
    stock: 5,
    status: "Baixo Estoque",
  },
];

export function ProductList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Código</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead className="text-right">Preço</TableHead>
            <TableHead className="text-right">Estoque</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.code}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell className="text-right">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </TableCell>
              <TableCell className="text-right">{product.stock}</TableCell>
              <TableCell>
                <Badge variant={
                  product.status === 'Ativo' ? 'default' :
                  product.status === 'Sem Estoque' ? 'destructive' :
                  'warning'
                }>
                  {product.status}
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