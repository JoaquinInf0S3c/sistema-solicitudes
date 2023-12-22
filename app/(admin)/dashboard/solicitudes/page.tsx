import RequestTable from "@/components/request/table";
import { fetchRequests, fetchUserByEmail } from "@/lib/data";
import { RequestField} from "@/lib/definitions";

export default async function Page() {
  const requests: RequestField[] = await fetchRequests();

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Solicitudes</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <h1>Buscar</h1>
        <h2>Ingresar solicitud</h2>
      </div>
      <RequestTable requests={requests}/>
      <div className="mt-5 flex w-full justify-center"></div>
    </div>
  );
}
