import Link from 'next/link';
import { X } from 'lucide-react';

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Mobile sidebar overlay */}
      {open && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden" 
          onClick={onClose}
        />
      )}

      {/* Mobile sidebar */}
      <aside 
        className={`fixed inset-y-0 right-0 z-50 w-64 transform bg-white p-6 shadow-lg transition-transform duration-200 ease-in-out md:static md:z-0 md:w-72 md:translate-x-0 md:shadow-none ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-6 flex items-center justify-between md:hidden">
          <h2 className="text-lg font-bold">Menu</h2>
          <button 
            onClick={onClose}
            className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mb-8 md:hidden">
          <ul className="space-y-3">
            <li>
              <Link href="/" className="block text-sm font-medium text-foreground hover:text-primary">
                Início
              </Link>
            </li>
            <li>
              <Link href="/categories" className="block text-sm font-medium text-foreground hover:text-primary">
                Categorias
              </Link>
            </li>
            <li>
              <Link href="/about" className="block text-sm font-medium text-foreground hover:text-primary">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block text-sm font-medium text-foreground hover:text-primary">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sidebar content - visible on all screen sizes */}
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Postagens Recentes</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/post/1" className="block text-sm text-muted-foreground hover:text-foreground">
                  A vida de Davi: Lições de um homem segundo o coração de Deus
                </Link>
              </li>
              <li>
                <Link href="/post/2" className="block text-sm text-muted-foreground hover:text-foreground">
                  Obediência a Deus em tempos difíceis: O exemplo de Daniel
                </Link>
              </li>
              <li>
                <Link href="/post/3" className="block text-sm text-muted-foreground hover:text-foreground">
                  Meditação sobre os Salmos: Encontrando paz nas promessas de Deus
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/antigo-testamento" className="block text-sm text-muted-foreground hover:text-foreground">
                  Antigo Testamento
                </Link>
              </li>
              <li>
                <Link href="/category/rei-davi" className="block text-sm text-muted-foreground hover:text-foreground">
                  Rei Davi
                </Link>
              </li>
              <li>
                <Link href="/category/obediencia" className="block text-sm text-muted-foreground hover:text-foreground">
                  Obediência a Deus
                </Link>
              </li>
              <li>
                <Link href="/category/palavra-do-dia" className="block text-sm text-muted-foreground hover:text-foreground">
                  Palavra do Dia
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Inscreva-se</h3>
            <p className="mb-3 text-sm text-muted-foreground">
              Receba nossas reflexões bíblicas e meditações diárias
            </p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <button className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
