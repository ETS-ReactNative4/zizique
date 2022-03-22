import axios from 'axios';
import React from 'react';


const AxiosAuth = axios.create({
    baseURL: 'https://cucuque.herokuapp.com/',
});
const Api =
{
    UpdateUser:async(user)=>{
        try {
            const response = await AxiosAuth.put(`/users/${user.email}`,{
                username:user.username,
                profile_pic:user.profil_pic
            },{headers:{"Authorization" : `Bearer ${user.AccessToken}`}})
            if (response.status===200) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error)

            return false;
        }
    },
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
            const response = await AxiosAuth.get("music/genres")
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
    GetProfil: async (token) => {
        try {
            const response = await AxiosAuth.get("profil",{headers:{"Authorization" : `Bearer ${token}`}})
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