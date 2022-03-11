import axios from 'axios';
import React from 'react';


const AxiosAuth = axios.create({
    baseURL: 'https://cucuque.herokuapp.com/',
});
const Api =
{
    Signup: async (user) => {
        try {
            const response = await AxiosAuth.post("auth/register",
                {
                    username: user.username,
                    password: user.password,
                    email: user.email,
                    profil_pic: user.IconIndex
                })
            if (response.status == 201) {
                return response.data;
            } else {
                return false;
            }
        } catch (err) {
            return err;
        }
    },
    GetGenre: async () => {
        try {
            const response = await AxiosAuth.get("music/genres",)
            return response.data;
        } catch (error) {
            return error
        }
    },
    SignIn: async (user, type) => {
        try {
            if (type == "password") {
                const response = await AxiosAuth.post("auth/login",
                    {
                        email: user.email,
                        password: user.password,
                        grant_type: "password"
                    })
                return response.data;

            } else {
                const response = await AxiosAuth.post("auth/login",
                    {
                        email: user.email,
                        refresh: user.refresh,
                        grant_type: "refresh_token"
                    })
                return response.data;

            }

        } catch (err) {
            console.log(err)
        }
    },
    GetProfil: async () => {
        try {
            const response = await AxiosAuth.get("profil")
            return response;
        } catch (error) {
            return error
        }
    },
    GetGenrePlaylist: async (genreID) => {
        try {
            const response = await AxiosAuth.get(`/music/genres/${genreID}/playlists`)
            return response;
        } catch (error) {
            return error
        }

    }
};
const ApiContext = React.createContext(Api);
export { Api };
export default ApiContext