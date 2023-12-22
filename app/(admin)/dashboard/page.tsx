import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Peticiones pendientes</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
      </Card>
      <Card className="w-[200px] space-y-5 p-4" radius="sm">
        <div className="h-24 rounded-lg bg-default-300">45</div>
        <div className="space-y-3"></div>
      </Card>
    </div>
  );
}
