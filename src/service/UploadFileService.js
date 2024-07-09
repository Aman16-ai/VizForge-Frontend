import { uploadFileApi } from "./Api";

export const uploadFile = async (formData) => {
  try {
    const url = uploadFileApi;
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (response.status === 201) {
      const data = await response.json();
      return { success: true, data: data?.Response };
    }
    return { success: false, message: "File not uploaded" };
  } catch (err) {
    return { success: false, Detail: err.toString() };
  }
};
