async function useFetch(endpoint) {
    const data= await fetch(endpoint)
    const gif= await data.json()
    return gif.data
}

export default useFetch


