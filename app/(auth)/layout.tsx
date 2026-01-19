import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur">
          <div className="container flex h-16 items-center justify-between px-6">
            <nav className="flex items-center gap-4">
              <Button>
                <Link href="/login">Login</Link>
              </Button>
              <Button>
                <Link href="/register">Register</Link>
              </Button>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
