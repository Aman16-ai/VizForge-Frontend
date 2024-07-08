import { LOGIN_API, REGISTER_API, USER_API } from "../Api";


export const getUserDetails = async () => {
  const response = await fetch(USER_API, {
    method : 'GET',
    headers: {
      "content-Type":"application/json",
      Authorization: `Bearer ${localStorage.getItem("v-token")}`,
    },
  });
  if(response.status !== 200) {
    throw new Error("User not found")
  }
  const data = await response.json()
  return data?.Response
};

export const loginUser = async (credentails) => {
    const response = await fetch(LOGIN_API, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body : JSON.stringify(credentails)
      });
      if (response.status !== 200) {
        throw new Error("Falid to login");
      }
      const data = await response.json();
      return data?.Response;
}



export const registerUser = async (body) => {
  const response = await fetch(REGISTER_API, {
    method : 'POST',
    headers: {
      "content-Type":"application/json",
    },
    body : JSON.stringify(body)
  });
  if(response.status !== 201) {
    throw new Error("Failed to register")
  }
  const data = await response.json()
  return data
};

