import Axios from 'axios';
import useSWR from 'swr';

const access_token = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjMtcUI4c2xWbXNxdUkwY0V4clBBYiJ9.eyJpc3MiOiJodHRwczovL2NhcmVwaGFyLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJMeW1hQ0NVUmVhUGM5V0FqUXlXWElKZjJKdzdIWHpLNkBjbGllbnRzIiwiYXVkIjoiY2FyZXBoYXJzaXRlIiwiaWF0IjoxNjIyMDUxMzQwLCJleHAiOjE2MjIxMzc3NDAsImF6cCI6Ikx5bWFDQ1VSZWFQYzlXQWpReVdYSUpmMkp3N0hYeks2Iiwic2NvcGUiOiJyZWFkOmN1c3RvbWVycy5hbGwgcmVhZDpjdXN0b21lcnMgd3JpdGU6Y3VzdG9tZXJzIHJlYWQ6cmVzZXJ2YXRpb25zLmFsbCByZWFkOnJlc2VydmF0aW9ucyB3cml0ZTpyZXNlcnZhdGlvbnMgd3JpdGU6bG9jYXRpb25zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwicGVybWlzc2lvbnMiOlsicmVhZDpjdXN0b21lcnMuYWxsIiwicmVhZDpjdXN0b21lcnMiLCJ3cml0ZTpjdXN0b21lcnMiLCJyZWFkOnJlc2VydmF0aW9ucy5hbGwiLCJyZWFkOnJlc2VydmF0aW9ucyIsIndyaXRlOnJlc2VydmF0aW9ucyIsIndyaXRlOmxvY2F0aW9ucyJdfQ.YWP2iMkS7TYkwjJp86EbiWoRNr-D6FJsgqn0j9Qsx2tViIqhQFa_FO79xZZxQSY1mUQGzNPhzO-NASSH0ewk-SADAgbK7lAxhSC7VjEHrY6ZYIQDKT5xXORxn9ie1rGdHuJFPmhBjnDA-S0fN_0ijE_9juYFJ030H1s9K8j2dxX9G37sNtyAjB1tHaDkGAh4FnGSsboZvRJdKpoFBGoHmFjXGFGTatjWf8vq38jdHT01ViPOiyiXXkTv6sg4qQhb9NnTA2iS7P9lI9w9w0o9k5j-rIpkn-NQ9j2zDoyeA29fDFTmKj-17wbNbUEof6J0yPmL3cSJn5srrcBGxxjU3A`;

const axiosInstance = Axios.create({
    headers: {
        authorization: `bearer ${access_token}`,
    },
    validateStatus: () => true,
});

// const axiosInstance = Axios.createInstance({
//     headers: {
//         authorization: `bearer ${access_token}`,
//     },
//     validateStatus: () => true,
// });

axiosInstance.interceptors.response.use(
    (res) => res,
    function (error) {
        return error;
    }
);

export default axiosInstance;

//axiosInstance.get(url).then((res) => res.data);
const axiosFetcher = (url) => axiosInstance.get(url).then((res) => res.data);

export function useRequest(url) {
    const { data } = useSWR(url, axiosFetcher);
    console.log(data);
    return data;
}
