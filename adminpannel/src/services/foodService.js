import axios from "axios";

const API_URL = "http://localhost:8080/api/TastyGo";

export const addFood = async (foodData, image) => { 
    const formData = new FormData();
        formData.append('food', JSON.stringify(foodData));
        formData.append('file', image);

        try {
                   await axios.post(API_URL, formData, {headers: {'Content-Type': 'multipart/form-data'}});
                } catch (error) {
                    console.error(error);
                  throw error;
                }
    
    }

    export const getFoodList = async () => {
        try {
          const response = await axios.get(API_URL);
          return response.data;
        } catch (error) {
            console.error("Error fetching food list",error);
            throw error;
        }
    }


    export const deleteFood = async (foodId) => {
       try {
        const response = await axios.delete(API_URL+"/" + foodId);
        return response.status==204;
        } catch (error) {
            console.error("Error removing food",error);
            throw error;
        }
    }

