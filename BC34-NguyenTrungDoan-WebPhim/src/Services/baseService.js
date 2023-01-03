import axios from "axios";
import { DOMAIN_BE, token } from "../utils/constant";

export class baseService {

    put = (url,model) =>{
        return axios({
           url:`${DOMAIN_BE}/${url}`,
           method: 'PUT',
           data: model,
           headers: {'Authorization': 'Bearer ' + localStorage.getItem(token)}
        })
    }

    post = (url,model) =>{
        return axios({
           url:`${DOMAIN_BE}/${url}`,
           method: 'POST',
           data: model,
           headers: {'Authorization': 'Bearer ' +  localStorage.getItem(token)}
        })
    }

    get = (url) =>{
        return axios({
           url:`${DOMAIN_BE}/${url}`,
           method: 'GET',
           headers: {'Authorization': 'Bearer ' + localStorage.getItem(token)}
        })
    }

    delete = (url) =>{
        return axios({
           url:`${DOMAIN_BE}/${url}`,
           method: 'DELETE',
           headers: {'Authorization': 'Bearer ' + localStorage.getItem(token)}
        })
    }

}