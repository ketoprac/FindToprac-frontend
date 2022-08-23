import KetoprakItem from "../KetoprakItem/KetoprakItem";

const Content = () => {
  return (
    <main className="px-40 mt-15" id="content">
      <section className="mb-16">
      <label className="mr-2" htmlFor="sort">Urutkan berdasarkan: </label>
      <select className="border rounded px-2" name="sort">
        <option value="rating">Rating</option>
        <option value="harga">Harga</option>
      </select>
      </section>
      <section className="mb-16 grid grid-cols-4 gap-6">
       <KetoprakItem />
       <KetoprakItem />
       <KetoprakItem />
       <KetoprakItem />
       <KetoprakItem />
       <KetoprakItem />
       <KetoprakItem />
       <KetoprakItem />
      </section>
    </main>
  )
}

export default Content;