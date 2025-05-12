import Layout from '@components/layout/Layout'

export default function About() {
  return (
    <Layout title="Sobre - Oficina de Oração">
      <div className="space-y-8">
        <section>
          <h1 className="mb-6 text-3xl font-bold">Sobre o Autor</h1>
          
          <div className="mb-8 overflow-hidden rounded-xl">
            <div className="relative h-[300px] w-full bg-muted">
              {/* Placeholder for author image */}
              <div className="flex h-full w-full items-center justify-center bg-secondary/50 text-center">
                <span className="text-lg text-muted-foreground">Foto de Gabriel Martins</span>
              </div>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2>Gabriel Martins</h2>
            
            <p>
              Olá! Sou Gabriel Martins, criador do blog "Oficina de Oração". Minha jornada de fé começou desde cedo, 
              mas foi ao estudar profundamente as Escrituras que desenvolvi uma paixão especial pelo Antigo Testamento 
              e pelas histórias de personagens como o Rei Davi.
            </p>
            
            <p>
              Formado em teologia e com experiência em ministério, dedico meu tempo a estudar a Palavra de Deus e 
              compartilhar reflexões que possam fortalecer a fé e a caminhada espiritual dos leitores. Tenho um 
              interesse particular em explorar como as narrativas bíblicas, especialmente do Antigo Testamento, 
              continuam relevantes e aplicáveis às nossas vidas hoje.
            </p>
            
            <h3>Minha Visão para o Blog</h3>
            
            <p>
              Criei a "Oficina de Oração" com o objetivo de oferecer um espaço de reflexão bíblica profunda, mas 
              acessível. Acredito que a Palavra de Deus tem poder transformador quando a estudamos com seriedade e 
              a aplicamos em nossas vidas diárias.
            </p>
            
            <p>
              Através deste blog, espero:
            </p>
            
            <ul>
              <li>Compartilhar meditações que ajudem os leitores a aprofundar seu relacionamento com Deus</li>
              <li>Explorar as riquezas do Antigo Testamento e suas aplicações para hoje</li>
              <li>Oferecer reflexões sobre a vida de personagens bíblicos como Davi, que, apesar de suas falhas, 
              foi chamado de "homem segundo o coração de Deus"</li>
              <li>Incentivar a obediência a Deus em todas as áreas da vida</li>
            </ul>
            
            <h3>Além do Blog</h3>
            
            <p>
              Além de escrever para o blog, também sou palestrante e ministro estudos bíblicos em minha igreja local. 
              Tenho interesse em temas como liderança cristã, disciplinas espirituais e o desenvolvimento de uma 
              cosmovisão bíblica para todos os aspectos da vida.
            </p>
            
            <p>
              Quando não estou estudando ou escrevendo, gosto de passar tempo com minha família, ler bons livros 
              e explorar a natureza - momentos que frequentemente se tornam oportunidades para refletir sobre a 
              grandeza e bondade de Deus.
            </p>
            
            <h3>Contato</h3>
            
            <p>
              Estou sempre aberto a conversas, perguntas e sugestões de temas para o blog. Você pode entrar em 
              contato comigo através da página de <a href="/contact" className="text-primary hover:underline">Contato</a> 
              ou me encontrar nas redes sociais.
            </p>
            
            <p>
              Obrigado por visitar a Oficina de Oração. Espero que as reflexões compartilhadas aqui abençoem sua 
              caminhada com Deus.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}