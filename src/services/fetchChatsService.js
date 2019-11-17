const fetchChatsService = async () => {
  try {
    const chats = await fetch(`http://localhost:3000/chats`).then((response) => response.json());
    return {chats}
  }

  catch (err) {
    console.error(err);
  }
};

export default fetchChatsService;
