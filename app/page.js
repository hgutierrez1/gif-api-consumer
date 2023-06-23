'use client'
import './global.css'
import Searchprovider from '@/Context'
import Main from './Main/Main'







 function Home() {
  
  return (
      <Searchprovider>
        <Main/>
      </Searchprovider>
    )
}
export default Home
