import { CardClientList } from "@/components/CardClientList";
import LoadingCard from "@/components/LoadingCard";
import { redirect } from "next/navigation";

export default function Home() {
  return redirect("/login");
}
