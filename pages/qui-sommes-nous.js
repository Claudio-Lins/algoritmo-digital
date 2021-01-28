

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
                                        <Image className='rounded-full'
                                            src="/quem-somos/mihnea-niculescu.jfif.css"
                                            alt="Algoritmo Digital"
                                            width={100}
                                            height={100}
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
                                        <Image className='rounded-full'
                                            src="/quem-somos/foto-paulo-lins.jpg"
                                            alt="Algoritmo Digital"
                                            width={100}
                                            height={100}
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
                                    <Image className='rounded-full'
                                            src="/quem-somos/foto-charles-lins.png"
                                            alt="Algoritmo Digital"
                                            width={100}
                                            height={100}
                                        />
                                        <div>
                                            <span className="text-green-600">Charles</span>
                                            <span className="text-gray-500"> Lins</span>
                                        </div>
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
