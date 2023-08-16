import axios from "axios";
export const getMovies =async() =>{
    try{
    const response = await fetch (`/api/get-characters`,{
        method:'GET',
      
    })
    const result = await response.json();
    return result;
    }
    catch(error){
        return error;
    }
    }
    export const fetchCharacterDetails =async(characterId: string) =>{
        try{
        const response = await fetch (`/api/[characterId]/${characterId}`,{
            method:'GET',
          
        })
        const result = await response.json();
        return result;
        }
        catch(error){
            return error;
        }
        }
       export async function getCharacterDetails(characterId: string) {
            try {
              const res = await axios.get(
                `https://hp-api.onrender.com/api/character/${characterId}`
              );
              return res.data;
            } catch (error) {
              console.error("Error fetching character details:", error);
              return null;
            }
          }