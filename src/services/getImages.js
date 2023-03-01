export const getImages = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );
  const data = await response.json();
  return data;
}