import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

const baseURL = `http://${process.env.REACT_APP_BACKEND_ADDRESS}:8080`;

const instance = axios.create({
	baseURL: `${baseURL}`,
	withCredentials: true,
});

const refreshAuthLogic = async () => {
	try {
		const { data } = await instance.get("/auth/refreshToken");
		const { accessToken } = data;

		instance.defaults.headers.common['authorization'] = `Bearer ${accessToken}`;
		return Promise.resolve();
	} catch (e) {
		return Promise.reject();
	}
}

createAuthRefreshInterceptor(instance, refreshAuthLogic, {
	statusCodes: [401, 403],
	skipWhileRefreshing: true,
});

export default instance;