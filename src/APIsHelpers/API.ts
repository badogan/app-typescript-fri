const RANDOM_USER_URL = "https://jsonplaceholder.typicode.com/users";

async function getSimple(url: string): Promise<void> {
  const response = await fetch(url);
  return response.json();
}

function getRandomUsers(setUserList:any):Promise<void> {
  return getSimple(RANDOM_USER_URL).then(res=>setUserList(res))
}

export {
  getRandomUsers
};
