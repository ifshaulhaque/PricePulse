import url_image_save_locally from "./url_image_save_locally.js";
import Stock from "../api/stock/stockModel.js";
import axios from "axios";

const apiUrl = 'https://autocomplete.clearbit.com/v1/companies/suggest';

export default {
    imageSaveLocally: () => {
        Stock.find().distinct('name').then((data) => {
            data.forEach(element => {
                element = element.replace(/ /g, "_");
            
                const queryParams = {
                    query: element
                };

                // Make the GET request to the API endpoint
                axios.get(apiUrl, { params: queryParams })
                    .then(response => {
                        // Handle the response data
                        response.data.forEach (item => {
                            url_image_save_locally.downloadImage(item.logo, element);
                        })
                    })
                    .catch(error => {
                        // Handle errors
                        console.error('Error fetching data:');
                    });

            })
                
        }).catch((err) => {
            console.log(err);
        });
    }
}