import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/lib/ThemeProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono', display: 'swap' });

export const metadata = {
  title: {
    default:  'Hector Alejandro Riascos Insuasty — Ingeniería de Software',
    template: '%s | Hector Riascos',
  },
  description: 'Portafolio de Hector Alejandro Riascos Insuasty, estudiante de Ingeniería de Software en la Universidad Cooperativa de Colombia, Pasto. Diseño de interfaces, desarrollo web y soluciones de software.',
  keywords: ['ingeniería de software', 'desarrollo web', 'react', 'next.js', 'portafolio', 'Hector Riascos', 'Pasto', 'Colombia', 'UCC', 'diseño de interfaces'],
  authors: [{ name: 'Hector Alejandro Riascos Insuasty' }],
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const themeScript = `
// aplica el tema guardado antes de que cargue la página
(function() {
  try {
    var saved = localStorage.getItem('theme');
    var system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', saved || system);
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <div style={{ overflowX: 'clip', width: '100%', position: 'relative', isolation: 'isolate' }}>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
