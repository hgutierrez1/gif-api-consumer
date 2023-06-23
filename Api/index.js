const API='https://api.giphy.com/v1/gifs/'
const KEY='HruQCz0SiYcQcc1lOM25MQNzlXnUrrHt'
const corps='&limit=15&offset=0&rating=g&bundle=messaging_non_clips'

const endpoints={
    trending:`${API}trending?api_key=${KEY}${corps}`,
    search:`${API}search?api_key=${KEY}&q=`
}

export default endpoints