import Layout from '@components/layout/Layout'

export default function Contact() {
  return (
    <Layout title="Contato - Oficina de Oração">
      <div className="space-y-8">
        <section>
          <h1 className="mb-6 text-3xl font-bold">Entre em Contato</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p>
              Obrigado por seu interesse no blog Oficina de Oração. Ficarei feliz em ouvir suas perguntas, 
              comentários ou sugestões para futuras reflexões e meditações.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Formulário de Contato</h2>
              
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Assunto
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Sua mensagem"
                  />
                </div>
                
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Informações de Contato</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">contato@oficinadeoração.com.br</p>
                </div>
                
                <div>
                  <h3 className="text-base font-medium">Redes Sociais</h3>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <a href="#" className="text-sm text-primary hover:underline">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-primary hover:underline">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-primary hover:underline">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-primary hover:underline">
                        YouTube
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-base font-medium">Horário de Resposta</h3>
                  <p className="text-sm text-muted-foreground">
                    Procuro responder a todas as mensagens em até 48 horas úteis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}