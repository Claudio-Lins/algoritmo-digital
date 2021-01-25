import Layout from "../components/layout";
import Image from "next/image";

export default function Fonctionnalites() {
  return (
    <Layout>
        <div className='bg-gray-200'>
      <div className=" md:px-24">
        <div className="mb-10">
          <h1 className="font-extrabold text-3xl text-gray-500 text-center py-4">
            Fonctionnalités
          </h1>
          <p className="font-light text-center text-gray-500">
            Le Journal d’association rassemble les données principales du cœur
            de métier et fournit les fonctionnalités nécessaires pour les
            exploiter.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="grid md:grid-cols-3">
        {/*  */}
        
        <div className="px-4 md:flex justify-end md: items-center text-center">
          <div className=" bg-gray-50 px-2 md:px-10 py-6 md:py-12 rounded-md shadow-lg">
            <div className="">
              <a href="#">
                <Image
                  src="/icons/icon-01.png"
                  alt="Algoritmo Digital"
                  width={50}
                  height={38}
                />
                <h3 className="text-green-600 font-bold">
                  Données personnelles des<br></br>bénéficiaires de vos services
                </h3>
              </a>
            </div>
            {/*  */}
            <div className="my-16">
              <a href="#">
                <Image
                  src="/icons/icon-02.png"
                  alt="Algoritmo Digital"
                  width={33}
                  height={44}
                />
                <h3 className="text-green-600 font-bold">
                  Listes des bénéficiaires<br></br>pour divers usages
                </h3>
              </a>
            </div>
            {/*  */}
            <div className="my-16">
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
            {/*  */}
            <div className="">
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

        {/*  */}

        <div className="p-4">
          <div className="m-4 shadow-lg text-center">
            <Image
              layout="responsive"
              src="/dashboard-completo.png"
              alt="Algoritmo Digital"
              width={600}
              height={625}
            />
          </div>
        </div>

        {/*  */}
        <div className="px-4 md:flex justify-start items-center text-center">
          <div className=" bg-gray-50 px-2 md:px-10 py-6 md:py-12 rounded-md shadow-lg">
            <div className="">
              <a href="#">
                <Image
                  src="/icons/icon-01.png"
                  alt="Algoritmo Digital"
                  width={50}
                  height={38}
                />
                <h3 className="text-green-600 font-bold">
                  Données personnelles des<br></br>bénéficiaires de vos services
                </h3>
              </a>
            </div>
            {/*  */}
            <div className="my-16">
              <a href="#">
                <Image
                  src="/icons/icon-02.png"
                  alt="Algoritmo Digital"
                  width={33}
                  height={44}
                />
                <h3 className="text-green-600 font-bold">
                  Listes des bénéficiaires<br></br>pour divers usages
                </h3>
              </a>
            </div>
            {/*  */}
            <div className="my-16">
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
            {/*  */}
            <div className="">
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
      </div>
      </div>
    </Layout>
  );
}