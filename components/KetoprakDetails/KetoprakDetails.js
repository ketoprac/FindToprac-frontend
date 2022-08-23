import { FaRegStar } from 'react-icons/fa';

const KetoprakDetails = () => {
  return (
    <div className="flex px-40 mt-20 gap-5">
      <section className="w-6/12">
        <img className="rounded-lg" src="/ketoprak.png" alt="ketoprak" />
      </section>
      <section className="w-5/12">
        <h1 className="font-bold text-2xl">Ketoprak Bang Dul</h1>
        <p>Jalan Kedondong</p>
        <p>Depok</p>
        <p>Rp 13.000</p>
        <p>&quot;Yang bikin enak itu ya dari air botol yang kena jempolnya bang dul&quot; -Fazar 2019</p>
        <div className="flex">
        <FaRegStar/>
        <FaRegStar/>
        <FaRegStar/>
        <FaRegStar/>
        <FaRegStar/>
        </div>
      </section>
    </div>
  )
}

export default KetoprakDetails;