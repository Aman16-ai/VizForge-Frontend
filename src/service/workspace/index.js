import {
  CREATE_WORKSPACE_API,
  GET_USER_ALL_WORKSPACE_API,
  WORKSPACE_API,
} from "../Api";

export const createUserWorkspaceService = async (payload) => {
  const response = await fetch(CREATE_WORKSPACE_API, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("v-token")}`,
    },
    body: JSON.stringify(payload),
  });
  if (response.status !== 201) {
    throw new Error("Workspace not created");
  }
  const data = await response.json();
  return data?.Response;
};

export const getUserWorkspaceByIdService = async (id) => {
  const response = await fetch(WORKSPACE_API + id, {
    method: "GET",
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("v-token")}`,
    },
  });
  if (response.status !== 200) {
    throw new Error("Workspace not created");
  }
  const data = await response.json();
  return data?.Response;
};

export const updateUserWorkspace = async (id, payload) => {
  const response = await fetch(WORKSPACE_API + id, {
    method: "PATCH",
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("v-token")}`,
    },
    body: JSON.stringify(payload),
  });
  if (response.status !== 200) {
    throw new Error("Workspace not updated");
  }
  const data = await response.json();
  return data?.Response;
};

export const getUserAllWorkspaceService = async () => {
  const response = await fetch(GET_USER_ALL_WORKSPACE_API, {
    method: "GET",
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("v-token")}`,
    },
  });
  if (response.status !== 200) {
    throw new Error("Workspace not created");
  }
  const data = await response.json();
  return data?.Response;
};

export const deleteUserWorkspaceService = async (id) => {
  const response = await fetch(WORKSPACE_API + id, {
    method: "DELETE",
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("v-token")}`,
    },
  });
  if (response.status !== 200) {
    throw new Error("Workspace not deleted");
  }
  const data = await response.json();
  return data?.Response;
}
