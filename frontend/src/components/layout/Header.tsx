export interface HeaderProps {
  title: string;
  text?: string;
}

export function Header({ title, text }: HeaderProps) {
  return (
    <header className="site-header">
      <h1>{title}</h1>
      {text && <p className="aciklama-metin">{text}</p>}
    </header>
  );
}

export default Header;
