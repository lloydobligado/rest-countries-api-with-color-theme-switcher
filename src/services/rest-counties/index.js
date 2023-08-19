import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const BASE_URL = "https://restcountries.com/v3.1/"

export const useCountriesApi = () => {
    
    //get all country
    const getAllCountry = async () => {
        try {
            const response = await axios.get(`${BASE_URL}all`);
            return response.data;
          } catch (error) {
            throw error;
          }
    }

    //get country
    const getCountry = async (name) => {
        try {
            const response = await axios.get(`${BASE_URL}name/${name}`);
            return response.data;
        }
        catch (err) {
            return err;
        }
    }

    const getCountryByRegion = async (region) => {
        try {
            const response = await axios.get(`${BASE_URL}region/${region}`);
            return response.data;
        }
        catch (err) {
            return err;
        }
    }

    // https://restcountries.com/v3.1/name/{name}

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

    // get country
    const useGetCountryByRegion = (region) => {
        return useQuery({
            queryKey: [`region-name:${region}`, region],
            queryFn: async () => getCountryByRegion(region),
            keepPreviousData: true,
        })
    }

    return {
        useGetAllCountry,
        useGetCountry,
        useGetCountryByRegion,
    };
}