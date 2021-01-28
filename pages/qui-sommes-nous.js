

import Nav from '../components/nav'
import Layout from '../components/layout'
import Image from 'next/image'

export default function QuiSommesNous() {
    return (
        <Layout>
            <div className='container min-h-screen mx-auto bg-gray-50'>

                <section>
                    <div>
                        <h1 className="font-extrabold text-3xl text-gray-500 text-center py-4">
                        Qui sommes-nous ?
                        </h1>
                        <p className="font-light text-center text-gray-500 tracking-wide md:px-20">
                        Le logiciel Journal d’association est développé par la filiale suisse de Algoritmo Digital, une entreprise de services informatiques basée en Suisse et au Portugal. Le projet, initié en 2018 à l’association découvrir, consiste dans le développement d’un système informatique pour les associations genevoises œuvrant dans le domaine de l’action sociale et ayant des besoins similaires. Pour plus de détails, veuillez lire cette page.
                        </p>
                    </div>
                </section>

                <section className='mx-auto my-10'>
                    <div className="md:flex md:justify-between md:space-x-4 items-center">
                        <div className='text-center my-10'>
                            <div className='md:w-56 h-auto mx-auto'>
                                <div className='px-16 pb-2 sm:px-6'>
                                    <a href="#">
                                        <Image
                                            src="/icons/icon-01.png"
                                            alt="Algoritmo Digital"
                                            width={50}
                                            height={38}
                                        />
                                        <h3 className="text-green-600 font-bold">
                                            Données personnelles des bénéficiaires de vos services
                                        </h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='text-center my-10'>
                            <div className='md:w-56 h-auto mx-auto'>
                                <div className='px-16 pb-2 sm:px-6'>
                                    <a href="#">
                                        <Image
                                            src="/icons/icon-01.png"
                                            alt="Algoritmo Digital"
                                            width={50}
                                            height={38}
                                        />
                                        <h3 className="text-green-600 font-bold">
                                            Données personnelles des bénéficiaires de vos services
                                        </h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='text-center my-10'>
                            <div className='md:w-56 h-auto mx-auto'>
                                <div className='px-16 pb-2 sm:px-6'>
                                    <a href="#">
                                        <Image
                                            src="/icons/icon-01.png"
                                            alt="Algoritmo Digital"
                                            width={50}
                                            height={38}
                                        />
                                        <h3 className="text-green-600 font-bold">
                                            Données personnelles des bénéficiaires de vos services
                                        </h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
