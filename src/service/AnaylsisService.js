import { Details } from "@mui/icons-material";
import { generateChartApi, getattributesWithTypeApi, uplaodFileInSession } from "./Api";

export const getattributesWithType = async (fileId) => {
  try {
    const url = getattributesWithTypeApi + fileId;
    const response = await fetch(url,{
        credentials:"include"
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log("data", data);
      return { success: true, data: data?.Response };
    }
    throw Error("Something went wrong");
  } catch (err) {
    return { success: false, Details: err.toString() };
  }
};

export const generateChartService = async (payload) => {
  try {
    const response = await fetch(generateChartApi, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: "include",
    });
    if (response.status === 201) {
      const data = await response.json();
      const options = data?.Response;
      return { success: true, options: options };
    }
    throw new Error("Something went wrong");
  } catch (err) {
    return { success: false, Details: err.toString() };
  }
};

export async function uploadFileInUserSessionService(payload) {
  const raw = JSON.stringify({
    filePath: payload,
  });
  console.log(payload)
  const response = await fetch(
    uplaodFileInSession,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: raw,
      credentials: "include",
    }
  );
  const data = await response.json();
  const cookies = document.cookie; // Get all cookies
  console.log("Cookies: ", cookies);
  return data;
}
