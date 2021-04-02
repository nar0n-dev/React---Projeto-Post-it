export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')

    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [post, photo] = await Promise.all([postsResponse, photosResponse])

    const postsJson = await post.json();
    const photosJson = await photo.json();

    const postsAndphotos = postsJson.map((post, index)=>{
      return{ ...post, thumbnail: photosJson[index].url}
    })

    return postsAndphotos
}