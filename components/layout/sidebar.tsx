"use client";

import { cn } from "@/lib/utils";
import {
  BarChart3,
  Box,
  Building2,
  CircleDollarSign,
  ClipboardList,
  FileText,
  LayoutDashboard,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Vendas",
    icon: ShoppingCart,
    href: "/vendas",
  },
  {
    label: "Produtos",
    icon: Box,
    href: "/produtos",
  },
  {
    label: "Clientes",
    icon: Users,
    href: "/clientes",
  },
  {
    label: "Fornecedores",
    icon: Building2,
    href: "/fornecedores",
  },
  {
    label: "Estoque",
    icon: ClipboardList,
    href: "/estoque",
  },
  {
    label: "Financeiro",
    icon: CircleDollarSign,
    href: "/financeiro",
  },
  {
    label: "Fiscal",
    icon: FileText,
    href: "/fiscal",
  },
  {
    label: "Relatórios",
    icon: BarChart3,
    href: "/relatorios",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 text-white">
      <div className="px-3 py-2 flex-1">
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className="h-5 w-5 mr-3" />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}