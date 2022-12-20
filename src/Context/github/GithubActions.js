const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

//  set to reducer the search dispach and loding
export const searchUsers = async (text) => {
  const parameters = new URLSearchParams({
    q: text,
  });
  const response = await fetch(`${GITHUB_URL}/search/users?${parameters}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const { items } = await response.json();
  //עדכון למצב(state) העכשוי
  return items;
};

export const getUser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  //if we dont have this user in api
  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    //we have this user in api
    const data = await response.json();
    //עדכון למצב(state) העכשוי
    return data;
  }
};

export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();
  //עדכון למצב(state) העכשוי
  return data;
};
