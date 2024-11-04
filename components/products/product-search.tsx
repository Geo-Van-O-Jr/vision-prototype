"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProductSearch() {
  return (
    <div className="flex gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar produtos..."
          className="pl-10"
        />
      </div>
      <Select defaultValue="todos">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos">Todas Categorias</SelectItem>
          <SelectItem value="eletronicos">Eletrônicos</SelectItem>
          <SelectItem value="perifericos">Periféricos</SelectItem>
          <SelectItem value="acessorios">Acessórios</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="todos">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos">Todos Status</SelectItem>
          <SelectItem value="ativo">Ativo</SelectItem>
          <SelectItem value="sem-estoque">Sem Estoque</SelectItem>
          <SelectItem value="baixo-estoque">Baixo Estoque</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}