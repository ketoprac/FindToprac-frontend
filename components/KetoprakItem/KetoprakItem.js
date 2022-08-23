const KetoprakItem = () => {
  return (
    <div className="border rounded-lg overflow-hidden w-60 min-h-52">
    <img src="/ketoprak.png" />
    <div className="p-6">
    <p className="text-xl">Ketoprak Bang Dul</p>
    <p className="text-sm">Jalan Kedondong</p>
    <p className="text-sm">Depok</p>
    <p className="text-gray-500 font-bold">Rp 13.000</p>
    </div>
    <button className="w-full text-white bg-gray-600 py-4 hover:bg-gray-500">Lihat Detail</button>
  </div>
  )
}

export default KetoprakItem;