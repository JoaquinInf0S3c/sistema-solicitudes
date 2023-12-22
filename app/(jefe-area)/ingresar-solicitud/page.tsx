import LogoutButton from "@/components/logout-button";
import RequestForm from "@/components/request/create-form";
import { fetchRequestTypes, fetchReasons } from "@/lib/data";

export default async function Page() {
  const requestTypes = await fetchRequestTypes();
  const reasons = await fetchReasons();
  return (
    <div className="absolute h-full w-full items-center">
      <LogoutButton />
      <RequestForm requestTypes={requestTypes} reasons={reasons} />
    </div>
  );
}
