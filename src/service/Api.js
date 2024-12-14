export const BASE_URL = "http://localhost:5000"
// export const BASE_URL = "https://viz-forge-backend.vercel.app"
export const AUTOMATION_BASE_URL = "http://127.0.0.1:8000"
// export const AUTOMATION_BASE_URL = "https://ai-data-scientist-automation-service.onrender.com/"

export const uploadFileApi = BASE_URL + "/file/uploadFile/" 
export const getattributesWithTypeApi = BASE_URL + "/analysis/getattributesWithType/"
export const generateChartApi = BASE_URL + "/analysis/createChart/"
export const streamDataApi = BASE_URL + "/analysis/streamData/"
export const uplaodFileInSession = BASE_URL + "/uploadFileInUserSession/"


export const LOGIN_API = BASE_URL + "/auth/login/"
export const REGISTER_API = BASE_URL + "/auth/register/"

export const USER_API = BASE_URL + "/user"


export const CREATE_WORKSPACE_API = BASE_URL + "/createWorkspace/"
export const GET_USER_ALL_WORKSPACE_API = BASE_URL + "/getUserAllWorkspace"
export const GET_USER_WORKSPACE_BY_ID_API = BASE_URL + "/workspace/"

export const PERFORM_AUTO_FE_API = AUTOMATION_BASE_URL + "/performFE/"
