import {observable,action, makeObservable,computed} from 'mobx'

class StoreConnexion {
    login='';
    password='';
    accessToken='';
    refreshToken='';
    id_socket='';
    profilPicture=0;
    
    //login username
    getLogin=()=>{
        return this.login;
    }
    setLogin=(unLogin)=>{
        this.login=unLogin;
    }
    //Password
    getPassword=()=>{
        return this.password;
    }
    setPassword=(unPassword)=>{
        this.password=unPassword;
    }
    //Session
    getRefresh=()=>{
        return this.refreshToken;
    }

    setRefresh=(refreshToken)=>{
        this.refreshToken=refreshToken;
    }
    //Access
    getAccess=()=>{
        return this.accessToken;
    }
    setAccess=(accessToken)=>{
        this.accessToken=accessToken;
    }

    //ProfilPicture
    getProfilPicture=()=>{
        return this.accessToken;
    }
    setProfilPicture=(accessToken)=>{
        this.accessToken=accessToken;
    }
    getProfilPicture=()=>{
        return this.profilPicture;
    }
    setProfilPicture=(profilPicture)=>{
        this.profilPicture=profilPicture;
    }
     /*storeData = async (login,password,idSession) => {
        try {
            this.setLogin(identifiant);
            this.setPassword(mdp);
            this.setSessionId(session_id);

            const data=[login,password,idSession]
            const jsonValue = JSON.stringify(data)
          await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
          // saving error
        }
      }*/
      get isConnected() {
          if (this.login) {
            return true;

          } else {
            return false;

          }
    }
    constructor(){
        makeObservable(this,{
            login:observable,//Listes des tâches en cours
            password:observable,
            accessToken:observable,
            refreshToken:observable,
            id_socket:observable,
            profilPicture:observable,
            isConnected:computed,
            getProfilPicture:action,
            setProfilPicture:action,
            getLogin:action,
            getPassword:action,
            getRefresh:action,
            getAccess:action,
            setPassword:action,
            setLogin:action,
            setRefresh:action,
            setAccess:action,
        });
    }
}

const storeConnexion = new StoreConnexion();
export {storeConnexion};