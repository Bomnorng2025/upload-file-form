export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <section className="bg-amber-100">
          <h1 className="bg-blue-400 text-amber-50 px-2">Banner</h1>
          {children}
        </section>
      </body>
    </html>
  );
}
