import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Header({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-40 border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <button 
            onClick={onMenuClick}
            className="mr-2 rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground md:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Oficina de Oração</span>
          </Link>
        </div>

        <nav className="hidden md:flex md:items-center md:space-x-4">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Início
          </Link>
          <Link href="/categories" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Categorias
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Sobre
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Contato
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Inscrever-se
          </button>
        </div>
      </div>
    </header>
  );
}
