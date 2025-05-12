import Head from 'next/head';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function Layout({ children, title = 'Oficina de Oração' }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Blog de reflexões bíblicas e meditações diárias sobre o Antigo Testamento, Rei Davi e obediência a Deus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="container mx-auto flex flex-1 flex-col md:flex-row">
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>

        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>

      <Footer />
    </div>
  );
}
