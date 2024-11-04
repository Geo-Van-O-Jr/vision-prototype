import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ProductList } from "@/components/products/product-list";
import { ProductSearch } from "@/components/products/product-search";
import Link from "next/link"; // Import the Link component

export default function ProductsPage() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Produtos</h1>
        <Link href="/produtos/novo"> {/* Update the href to your new product page */}
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Novo Produto
          </Button>
        </Link>
      </div>
      <ProductSearch />
      <ProductList />
    </div>
  );
}
