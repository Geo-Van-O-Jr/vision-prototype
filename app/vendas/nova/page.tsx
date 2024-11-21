import { Button } from "@/components/ui/button";

export default function NovaVenda() {
  return (
    <form>
      <div className="space-y-4">
        <div>
          <label htmlFor="code" className="block text-sm font-medium">
            Código
          </label>
          <input
            type="text"
            id="code"
            name="code"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="client" className="block text-sm font-medium">
            Cliente
          </label>
          <input
            type="text"
            id="client"
            name="client"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium">
            Data
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="total" className="block text-sm font-medium">
            Total
          </label>
          <input
            type="number"
            id="total"
            name="total"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Selecione um status</option>
            <option value="Concluída">Concluída</option>
            <option value="Aguardando Pagamento">Aguardando Pagamento</option>
            <option value="Cancelada">Cancelada</option>
          </select>
        </div>
        <div className="flex justify-end">
          {/* aplicar espaço entre os botões */}
          <Button type="submit" className="mr-2">
            Concluir Venda
          </Button>
          <Button variant="destructive">Cancelar</Button>
        </div>
      </div>
    </form>
  );
}
