const fetchUsersService = async () => {
  try {
    const users = await fetch(`http://localhost:3000/users`).then((response) => response.json());

    return {users}
  }

  catch (err) {
    console.error(err);
  }
};


export default fetchUsersService;
