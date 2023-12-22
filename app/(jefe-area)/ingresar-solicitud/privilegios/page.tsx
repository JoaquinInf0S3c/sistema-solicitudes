import Privileges from "@/components/request/privileges";
import LogoutButton from "@/components/logout-button";

export default function Page() {
  return (
    <div className="absolute flex flex-col h-full w-full items-center">
      <LogoutButton />
      <h1 className="text-4xl font-bold text text-white text-center mb-6">
        Privilegios
      </h1>
      <div className="flex flex-col items-center justify-center rounded-md mix-blend-soft-light shadow-2xl">
        <Privileges />
      </div>
      <div className="flex flex-row justify-end items-center w-full p-10">
      </div>
    </div>
  );
}
