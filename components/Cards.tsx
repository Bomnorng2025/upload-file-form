import { PostResponse } from "@/lib/posts";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Cards({ userId, id, title, body }: PostResponse) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{body}</CardDescription>
        <CardAction>
          <Button variant="link">
            User id: {userId} | ID: {id}
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
