import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center justify-between p-8">
        <li>
        <Image
        src="/logo-algoritmo-digital-70pct.png"
        alt="Algoritmo Digital"
        width={200}
        height={50}
      />
        </li>
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
            Home
            </a>
          </Link>
        </li>

        <li>
          <Link href="/fonctionnalites">
            <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
            Fonctionnalités
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
