import { Button } from "@/components/ui/button";
import { SaveIcon } from "lucide-react";

export default function NovoProduto() {
  return (
    <div className="space-y-4">
      {" "}
      {/* Added container for consistent spacing */}
      <h1 className="text-3xl font-bold">Novo Produto</h1>
      <form className="space-y-4">
        {" "}
        {/* Added container and spacing for form elements */}
        <div>
          {" "}
          {/* Added container for label and input */}
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nome:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div>
          {" "}
          {/* Added container for label and textarea */}
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Descrição:
          </label>
          <textarea
            id="description"
            name="description"
            className="mt-1 p-2 border rounded-md w-full"
          ></textarea>
        </div>
        <div>
          {" "}
          {/* Added container for label and input */}
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Preço:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            step="0.01"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <Button type="submit">
          <SaveIcon className="h-4 w-4 mr-2" />
          Salvar
        </Button>
      </form>
    </div>
  );
}
