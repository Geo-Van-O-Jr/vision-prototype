import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">João da Silva</p>
          <p className="text-sm text-muted-foreground">
            joao.silva@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+R$ 1.999,00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>MR</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Maria Rosa</p>
          <p className="text-sm text-muted-foreground">maria.rosa@email.com</p>
        </div>
        <div className="ml-auto font-medium">+R$ 3.899,00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>CP</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Carlos Pereira</p>
          <p className="text-sm text-muted-foreground">
            carlos.pereira@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+R$ 2.499,00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Ana Santos</p>
          <p className="text-sm text-muted-foreground">
            ana.santos@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+R$ 899,00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>RF</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Roberto Ferreira</p>
          <p className="text-sm text-muted-foreground">
            roberto.ferreira@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+R$ 3.299,00</div>
      </div>
    </div>
  );
}