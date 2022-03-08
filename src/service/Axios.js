import axios from 'axios';
import React from 'react';


  const AxiosAuth= axios.create({
    baseURL: 'https://cucuque.herokuapp.com/',
  });
    const Api=
    {
        Signup:async (user)=>{
            try 
            {
             const response=await AxiosAuth.post("auth/register",
            {
                username:user.username,
                password:user.password,
                email:user.mail,
                profil_pic:user.IconIndex
            })
            if(response.status==201 ){
                return true;
            }else{
                console.log("un problème est survenue status code : ",response.status);
                return false;
            }
            return response;
            }catch(err){
                return err;
            }
        },
        GetGenre:async ()=>{
            try {
                const response=await AxiosAuth.post("auth/register",{user})
                if(response.status==201 ){
                    return true;
                }else{
                    console.log("un problème est survenue status code : ",response.status);
                    return false;
                }
                return response;
            } catch (error) {
                
            }
        }
    };
    const ApiContext= React.createContext(Api);
    export {Api};
    export default ApiContext