import Layout from "../components/layout";
import Image from "next/image";

export default function Fonctionnalites() {
  return (
    <Layout>
      <div className="bg-gray-200">
        <div className=" md:px-24">
          <div className="py-10 border-gray-50 border-b">
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
        <div className="grid md:grid-cols-3 md:justify-around">
          {/*  */}

          <div className="px-4 sm:flex justify-end md:items-center text-center">
            <div className="px-2 md:px-10 py-6 md:py-12 rounded-md">
              <div className="rounded-md shadow-md p-6 sm:rounded-nono sm:shadow-none sm:bg-transparent">
                {/* Icon 01 */}
                <div className="">
                  <a href="#">
                    <Image
                      src="/icons/icon-01.png"
                      alt="Algoritmo Digital"
                      width={50}
                      height={38}
                    />
                    <h3 className="text-green-600 font-bold">
                      Données personnelles des<br></br>bénéficiaires de vos
                      services
                    </h3>
                  </a>
                </div>
                {/*  */}
                {/* Icon 02 */}
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
                {/* Icon 03 */}
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
                {/* Icon 04 */}
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
          {/*  */}
          {/* Dashboard */}
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
            <div className="px-2 md:px-10 py-6 md:py-12 rounded-md">
              <div className="rounded-md shadow-md p-6 sm:rounded-nono sm:shadow-none sm:bg-transparent	">

              {/* Icon 05 */}
              <div className="">
                  <a href="#">
                    <Image
                      src="/icons/icon-05.png"
                      alt="Algoritmo Digital"
                      width={35}
                      height={40}
                    />
                    <h3 className="text-green-600 font-bold">
                    Cours, formations,<br></br>évènements collectifs
                    </h3>
                  </a>
                </div>
                {/*  */}

                {/* Icon 06 */}
                <div className="my-16">
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
                {/*  */}

                {/* Icon 07 */}
                <div className="my-16">
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
                {/*  */}

                {/* Icon 08 */}
                <div className="">
                  <a href="#">
                    <Image
                      src="/icons/icon-08.png"
                      alt="Algoritmo Digital"
                      width={40}
                      height={40}
                    />
                    <h3 className="text-green-600 font-bold">
                    Intégration avec vos outils<br></br> d’email et agenda
                    </h3>
                  </a>
                </div>
                {/*  */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
