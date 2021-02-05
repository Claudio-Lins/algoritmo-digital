import Link from 'next/link'
import Image from 'next/image'

//export default function Nav() {
  //return (
    const Nav = () => (
     
    <nav className='bg-gray-100 py-4'>
      <div className='max-w-5xl px-4 mx-auto'>
        <div className='flex justify-between'>
          <div className='flex justify-between items-center space-x-6'>
            <div>
              <Image
                src="/logo-algoritmo-digital-70pct.png"
                alt="Algoritmo Digital"
                width={200}
                height={50}
              />
            </div>
            <div className='hidden md:flex space-x-6 justify-around'>
              <div className='ml-10'>
                <Link href="/">
                  <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
                    <h3>Home</h3>
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/fonctionnalites">
                  <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
                    <h3>Fonctionnalités</h3>
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/qui-sommes-nous">
                  <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
                    <h3>Qui sommes-nous ?</h3>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='hidden md:flex'>
            Secondary Nav
          </div>
          {/* Mobile Button */}
          <div className='md:hidden flex items-center'>
            <button className='mobile-menu-button'>
              <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Menu Mobile */}
        <div className='mobile-menu hidden md:hidden'>
          <div className='ml-4'>
            <Link href="/">
              <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
                <h3>Home</h3>
              </a>
            </Link>
          </div>
          <div className='ml-4'>
            <Link href="/">
              <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
                <h3>Home</h3>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  
  // const btn = document.querySelector('button.mobile-menu-button')
  // const menu = document.querySelector('.mobile-menu')

  // btn.addEventListener("click", () => {
  //   menu.classList.toggle('hidden');
  // })
  
  )
  export default Nav

 
  

 



// <nav className='border-b-2 border-white'>
    //   <ul className="flex items-center justify-between p-8">
    //     <li>
    //     <Image
    //     src="/logo-algoritmo-digital-70pct.png"
    //     alt="Algoritmo Digital"
    //     width={200}
    //     height={50}
    //   />
    //     </li>
    //     <li>

    //     </li>

    //     <li>
    //       <Link href="/fonctionnalites">
    //         <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
    //         <h3>Fonctionnalités</h3>
    //         </a>
    //       </Link>
    //     </li>

    //     <li>
    //       <Link href="/quem-somos">
    //         <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
    //         <h3>Quem Somos</h3>
    //         </a>
    //       </Link>
    //     </li>

    //     <li>
    //       <Link href="/qui-sommes-nous">
    //         <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
    //         Qui sommes-nous ?
    //         </a>
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>