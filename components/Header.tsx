import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white/70 px-4 py-4 backdrop-blur-md supports-backdrop-blur:bg-white/50 sm:px-8 dark:border-white/5 dark:bg-slate-900/40 dark:supports-backdrop-blur:bg-white/5">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="terminal-cursor hidden h-6 font-mono text-xl font-bold text-slate-800 sm:block dark:text-slate-200">
              ~/max-barajas
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
              className="hidden font-medium text-slate-600 transition-colors hover:text-slate-900 sm:block dark:text-slate-300 dark:hover:text-slate-100"
            >
              {link.title}
            </Link>
          ))}

        <ThemeSwitch />

        <MobileNav />
      </div>
    </header>
  )
}

export default Header
