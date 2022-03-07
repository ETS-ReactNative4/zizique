import axios from 'axios';
const AxiosAuth= axios.create({
    baseURL:'http://localhost:8082/api/'
  })


    const api=()=>
    {
        Signup:(user)=>{
            try 
            {
            const response =  await AxiosAuth.post(`auth/signup`,user)
            
            if(response.status==201){
                console.log("Utilisateur créer");
                return true;
            }else{
                console.log("un problème est survenue status code : ",response.status);
                return false;
            }
            
            }catch(err){

            }
        }
    },

  export default api;