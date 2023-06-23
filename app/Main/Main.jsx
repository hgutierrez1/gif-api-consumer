import { useContext } from 'react'
import { Search } from '@/Context'
import GifContainer from '@/Components/GifContainer'

function Main() {
  const context=useContext(Search)
  
  return (
    <main className='pt-6 w-full place-self-center flex flex-col'>
        <h1 className='text-xl font-bold text-center text-orange-palette'>Busca un gif!</h1>
        <input  className='border-2 rounded-lg my-4 w-10/12 max-w-md py-2 px-2 place-self-center' type='text' onChange={(e)=>context.sendEndpoint(e.target.value)}/>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
          {
            context.gifsToShow?.map((gif)=>(
              <GifContainer
                src={gif.images.original.url}
                alt={gif.title}
                key={gif.id}
              />
            ))
          }
        </section>
    </main>
  )
}

export default Main