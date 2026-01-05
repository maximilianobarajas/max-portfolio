import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-white/5 bg-slate-900/40 px-4 py-4 backdrop-blur-md supports-backdrop-blur:bg-white/5 sm:px-8">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            {/* Logo de Texto con Gradiente */}
            <div className="hidden h-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-2xl font-bold text-transparent sm:block">
              {siteMetadata.headerTitle}
            </div>
          </div>
        </Link>
      </div>

      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-slate-300 transition-colors hover:text-cyan-400 sm:block"
            >
              {link.title}
            </Link>
          ))}

        {/* Botón de búsqueda (opcional, si lo usas) */}
        {/* <SearchButton /> */}

        {/* ELIMINADO: ThemeSwitch (Para evitar el bug y mantener estética Dark) */}

        <MobileNav />
      </div>
    </header>
  )
}

export default Header
