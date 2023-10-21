import axios from "axios";

const url1="http://localhost:2000/";

export const useFunc = () => {
    const postData = async (url, body) => {
        
        try  {
            
            await axios.post(`${url1}${url}`, body);
            
        }
        catch (err) {
            console.error(`error ${err}`);
        }

    }

    const getData = async (url, params,query) => {
        
        try {
            console.log(`${url1}${url}${params}${query}`);
            return await axios.get(`${url1}${url}${params}${query}`);
        }
        catch (err) {
            console.error(`error ${err}`);
        }
    };

    const updateData = async (url, params, body) => {
        try {
            console.log(`${url1}${url}/${params}`);
            console.log(body);
            const res = await axios.put(`${url1}${url}/${params}`, body);
            console.log(res);
            return res
        }
        catch (err) {
            console.error(`error ${err}`);
        }
    };

    const deteteData = async (url, params,query) => {
        try {
            console.log(url);
            const res = await axios.delete(`${url1}${url}${params}${query}`);
            console.log(res);
            return res
        }
        catch (err) {
            console.error(`error ${err}`);
        }
    };

    return { getData, postData, updateData, deteteData }
}
