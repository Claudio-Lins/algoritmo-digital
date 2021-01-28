import Layout from "../components/layout";
import Image from "next/image";

export default function Fonctionnalites() {
  return (
    <Layout>
      <div className='container min-h-screen mx-auto'>

        <section>
          <div>
            <h1 className="font-extrabold text-3xl text-gray-500 text-center py-4">
              Fonctionnalités
                        </h1>
            <p className="font-light text-justify px-6 text-gray-500 tracking-wide md:px-20">
              Le Journal d’association rassemble les données principales du cœur
              de métier et fournit les fonctionnalités nécessaires pour les
              exploiter.
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
              <div className='md:w-56 h-auto mx-auto'>
                <div className='px-16 py-4 sm:px-6'>
                  <a href="#">
                    <Image
                      src="/icons/icon-02.png"
                      alt="Algoritmo Digital"
                      width={33}
                      height={44}
                    />
                    <h3 className="text-green-600 font-bold">
                      Listes des bénéficiaires pour divers usages
                                        </h3>
                  </a>
                </div>
              </div>
              <div className='md:w-56 h-auto mx-auto'>
                <div className='px-16 py-4 sm:px-6'>
                  <a href="#">
                    <Image
                      src="/icons/icon-03.png"
                      alt="Algoritmo Digital"
                      width={55}
                      height={45}
                    />
                    <h3 className="text-green-600 font-bold">
                      Journalisation des services
                                        </h3>
                  </a>
                </div>
              </div>
              <div className='md:w-56 h-auto mx-auto'>
                <div className='px-16 pt-2 sm:px-6'>
                  <a href="#">
                    <Image
                      src="/icons/icon-04.png"
                      alt="Algoritmo Digital"
                      width={42}
                      height={33}
                    />
                    <h3 className="text-green-600 font-bold">
                      Journalisation des services
                                        </h3>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className='mx-auto p-4'>
                <Image
                  src="/dashboard-completo.png"
                  alt="Algoritmo Digital"
                  width={600}
                  height={625}
                />
              </div>
            </div>
            <div className='text-center my-10'>
              <div className='md:w-56 h-auto mx-auto'>
                <div className='px-16 pb-2 sm:px-6'>
                  <a href="#">
                    <Image
                      src="/icons/icon-05.png"
                      alt="Algoritmo Digital"
                      width={35}
                      height={40}
                    />
                    <h3 className="text-green-600 font-bold">
                      Cours, formations, évènements collectifs
                                        </h3>
                  </a>
                </div>
              </div>
              <div className='md:w-56 h-auto mx-auto'>
                <div className='px-16 py-4 sm:px-6'>
                  <a href="#">
                    <Image
                      src="/icons/icon-06.png"
                      alt="Algoritmo Digital"
                      width={50}
                      height={40}
                    />
                    <h3 className="text-green-600 font-bold">
                      Facturations et paiements
                                        </h3>
                  </a>
                </div>
              </div>
              <div className='md:w-56 h-auto mx-auto'>
                <div className='px-16 py-4 sm:px-6'>
                  <a href="#">
                    <Image
                      src="/icons/icon-07.png"
                      alt="Algoritmo Digital"
                      width={50}
                      height={40}
                    />
                    <h3 className="text-green-600 font-bold">
                      Contacts externes à l’association
                                        </h3>
                  </a>
                </div>
              </div>
              <div className='md:w-56 h-auto mx-auto'>
                <div className='px-16 pt-2 sm:px-6'>
                  <a href="#">
                    <Image
                      src="/icons/icon-08.png"
                      alt="Algoritmo Digital"
                      width={40}
                      height={40}
                    />
                    <h3 className="text-green-600 font-bold">
                      Intégration avec vos outils d’email et agenda
                                        </h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
