import { Link } from 'react-router-dom'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex flex-wrap items-center gap-1 text-sm mb-6" aria-label="Navegação">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <span className="text-white/40 select-none">›</span>}
          {item.href ? (
            <Link
              to={item.href}
              className="text-white/60 hover:text-white transition-colors hover:underline underline-offset-2"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white font-semibold">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
