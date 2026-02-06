import { columns, Payment, User } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "n@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "processing",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "failed",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "n@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "processing",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "failed",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "n@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "processing",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "failed",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "n@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "processing",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "failed",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "n@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "processing",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "failed",
      email: "m@example.com",
    },
    // ...
  ];
}

async function getDatas(): Promise<User[]> {
  const base_url = process.env.NEXT_PUBLIC_API;
  const res = await fetch(`${base_url}/api/v1/users/`);
  const datas = await res.json();
  return datas;
}

export default async function DemoPage() {
  const data = await getDatas();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
