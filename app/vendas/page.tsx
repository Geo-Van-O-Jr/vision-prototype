import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { VendasContent } from "@/components/vendas/vendas-content"


export default function Vendas() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Vendas</h1>
        <Link href="/vendas/nova"> 
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nova Venda
          </Button>
        </Link>
      </div>
      <VendasContent />
    </div>
  );
}
