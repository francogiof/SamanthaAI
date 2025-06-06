export default function Layaout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Store</li>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
}