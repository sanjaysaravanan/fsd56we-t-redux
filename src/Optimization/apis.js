const getChars = async (page = 1) => {
  const response = await fetch(
    `https://api.disneyapi.dev/character?page=${page}&pageSize=10`
  );
  return await response.json();
};

export { getChars };
