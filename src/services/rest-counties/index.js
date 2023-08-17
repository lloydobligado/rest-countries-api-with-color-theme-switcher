import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const BASE_URL = "https://restcountries.com/v3.1/"

export const useCountriesApi = () => {

    const getAllCountry = async () => {
        try {
            const response = await axios.get(`${BASE_URL}all`);
            return response.data;
          } catch (error) {
            throw error;
          }
    }

    const getCountry = async (name) => {
        try {
            const response = await axios.get(`${BASE_URL}name/${name}`);
            return response.data;
        }
        catch (err) {
            return err;
        }
    }

    //get all country
    const useGetAllCountry = () => {
        return useQuery({
        queryKey: [`countries`],
        queryFn: async () => getAllCountry(),
        keepPreviousData: true,
        });
    };

    // get country
    const useGetCountry = (name) => {
        return useQuery({
            queryKey: [`country-name:${name}`, name],
            queryFn: async () => getCountry(name),
            keepPreviousData: true,
        })
    }
    return {
        useGetAllCountry,
        useGetCountry,
    };
}