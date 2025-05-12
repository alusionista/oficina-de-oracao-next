import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Sobre</h3>
            <p className="text-sm text-muted-foreground">
              Um blog de reflexões bíblicas e meditações diárias para fortalecer sua caminhada com Deus.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/category/antigo-testamento" className="text-muted-foreground hover:text-foreground">
                  Antigo Testamento
                </Link>
              </li>
              <li>
                <Link href="/category/rei-davi" className="text-muted-foreground hover:text-foreground">
                  Rei Davi
                </Link>
              </li>
              <li>
                <Link href="/category/obediencia" className="text-muted-foreground hover:text-foreground">
                  Obediência a Deus
                </Link>
              </li>
              <li>
                <Link href="/category/palavra-do-dia" className="text-muted-foreground hover:text-foreground">
                  Palavra do Dia
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Conecte-se</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Oficina de Oração. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
