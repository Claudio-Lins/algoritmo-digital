import Image from "next/image";
import Layout from "../components/layout";

export default function Quem() {
  return (
    <Layout>
      <div className="bg-gray-50 mx-auto">
        <div className=" bg-blue-300 py-4">
          <h1 className="text-center font-bold text-3xl text-gray-600 mb-4">
            Qui sommes-nous ?
          </h1>
          <p className="font-medium text-center px-6 text-gray-600">
            Le logiciel Journal d’association est développé par la filiale
            suisse de<strong> Algoritmo Digital</strong>, une entreprise de
            services informatiques basée en Suisse et au Portugal. Le projet,
            initié en 2018 à{" "}
            <strong className="text-green-600">l’association découvrir</strong>,
            consiste dans le développement d’un système informatique pour les
            associations genevoises œuvrant dans le domaine de l’action sociale
            et ayant des besoins similaires. Pour plus de détails, veuillez{" "}
            <strong className="text-green-600">lire cette page.</strong>
          </p>
        </div>
        <div className="text-center mx-auto  lg:grid lg:grid-cols-3">
          <div className="bg-blue-200 text-center pt-8">
            <Image className='rounded-full'
              src="/quem-somos/mihnea-niculescu.jpg"
              alt="Algoritmo Digital"
              width={100}
              height={100}
            />
            <h4 className='font-semibold text-green-600'>Mihnea <strong className='text-gray-600'>Niculescu</strong></h4>
            <a href='#' src='https://www.linkedin.com/in/mihnea-niculescu/'>
                
            </a>
          </div>
          <div className="bg-blue-300">Col 2</div>
          <div className="bg-blue-400">Col 3</div>
        </div>
      </div>
    </Layout>
  );
}
