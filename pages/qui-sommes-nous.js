

import Nav from '../components/nav'
import Layout from '../components/layout'
import Image from 'next/image'

export default function QuiSommesNous() {
    return (
        <Layout>
            <div className='container min-h-screen mx-auto bg-gray-50'>

                <section>
                    <div>
                        <h1 className="font-extrabold text-3xl text-gray-50 text-center py-4">
                        Qui sommes-nous ?
                        </h1>
                        <p className="font-light text-justify px-8 text-gray-500 tracking-wide md:px-20">
                        Le logiciel Journal d’association est développé par la filiale suisse de Algoritmo Digital, une entreprise de services informatiques basée en Suisse et au Portugal. Le projet, initié en 2018 à l’association découvrir, consiste dans le développement d’un système informatique pour les associations genevoises œuvrant dans le domaine de l’action sociale et ayant des besoins similaires. Pour plus de détails, veuillez lire cette page.
                        </p>
                    </div>
                </section>

                <section className='mx-auto my-10'>
                    <div className="md:flex md:justify-between md:space-x-4 items-center">
                        <div className='text-center'>
                            <div className='md:w-56 h-auto mx-auto'>
                                <div className='px-16 pb-2 sm:px-0'>
                                        <Image className='rounded-full'
                                            src="/quem-somos/mihnea-niculescu.jfif.css"
                                            alt="Algoritmo Digital"
                                            width={100}
                                            height={100}
                                        />
                                        <div>
                                            <span className="text-green-600">Mihnea</span>
                                            <span className="text-gray-500"> Niculescu</span>
                                        </div>
                                        <div className='mt-2'>
                                        <a href='#'>
                                        <Image className='rounded-full'
                                            src="/icons/linkedin.svg"
                                            alt="Linkedin"
                                            width={30}
                                            height={30}
                                        />
                                        </a>
                                        </div>
                                        <div>
                                            <h4 className='text-gray-500 font-light'>
                                            Analyse des besoins et évaluation des solutions pour des systèmes informatiques dans le domaine de la santé et de l’action sociale depuis plus de 5 ans.
                                            </h4>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center my-10'>
                            <div className='md:w-56 h-auto mx-auto'>
                                <div className='px-16 pb-2 sm:px-0'>
                                        <Image className='rounded-full'
                                            src="/quem-somos/foto-paulo-lins.jpg"
                                            alt="Algoritmo Digital"
                                            width={100}
                                            height={100}
                                        />
                                        <div>
                                            <span className="text-green-600">Paulo</span>
                                            <span className="text-gray-500"> Lins</span>
                                        </div>
                                        <div className='mt-2'>
                                        <a href='#'>
                                        <Image className='rounded-full'
                                            src="/icons/linkedin.svg"
                                            alt="Linkedin"
                                            width={30}
                                            height={30}
                                        />
                                        </a>
                                        </div>
                                        <div>
                                            <h4 className='text-gray-500 font-light'>
                                            Analyste de systèmes et développeur de logiciels depuis plus de 20 ans. Développement de solutions de gestion stratégique pour l'industrie pétrochimique.
                                            </h4>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>
                            <div className='md:w-56 h-auto mx-auto'>
                                <div className='px-16 pb-2 sm:px-0'>
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
                                        <div className='mt-2'>
                                        <a href='#'>
                                        <Image className='rounded-full'
                                            src="/icons/linkedin.svg"
                                            alt="Linkedin"
                                            width={30}
                                            height={30}
                                        />
                                        </a>
                                        </div>
                                        <div>
                                            <h4 className='text-gray-500 font-light'>
                                            Plus de 10 ans d'expérience en infrastructure informatique. Responsable de l'installation, de la configuration et de la gestion des solutions informatiques.
                                            </h4>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
