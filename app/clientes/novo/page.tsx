import { Button } from "@/components/ui/button";
import { SaveIcon } from "lucide-react";

export default function NovoCliente() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Novo Cliente</h1>
      <form className="space-y-4">
        <div>
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
          <label
            htmlFor="cpf"
            className="block text-sm font-medium text-gray-700"
          >
            CPF:
          </label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Telefone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
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
