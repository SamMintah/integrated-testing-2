const axios =require("axios");
 const baseUrl = "http://jsonplaceholder.typicode.com"


exports.fetchData = async (endPoint) =>{
   try {
     const result = await axios(`${baseUrl}/${endPoint}`) ;
     return result.data;

   } catch (error) {
    console.log(error.message)
   }
};