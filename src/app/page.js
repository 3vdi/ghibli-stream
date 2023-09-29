
export default function Home() {
  return (
    <div>
    <div className="... flex justify-center items-center text-8xl">
    <h1>Ghibli-Stream</h1>
  </div>
  <div className="... flex justify-center items-center m-8">
    <img src="https://cdn.dribbble.com/users/47000/screenshots/1472080/pavlov_ghibli_mashup_dribbbs.jpg?resize=768x576&vertical=center" width={'400vw'}
    alt="ghibli" />
  </div>
  <div className="... flex justify-center text-3xl mb-10">
  <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-blue-200 to-yellow-200
   hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400
   font-medium rounded-sm text-lg px-5 py-2.5 text-center mr-2 mb-2">start watching</button>
  </div>
  </div>
  )
}
