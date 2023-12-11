const baseUrl = 'https://comics-api.vercel.app/'

export const useFetchData = async (path: string) => {
  try {
    const response = await fetch(`${baseUrl}${path}`, { cache: 'force-cache' })
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}
