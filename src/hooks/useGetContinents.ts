import { gql, useQuery } from '@apollo/client';
import { AllContinents, Continent } from '../common/interface/continentsInterface';
import { AllCountires } from '../common/interface/countriesInterface';

const GET_CONTINENTS = gql`
    query {
        continents {
            name
            code
        }
    }
`;

const GET_COUNTRIES = gql`
    query {
        continent(code: "EU") {
            countries {
                name
                emoji
                languages {
                    name
                }
            }
        }
    }
`;

export const useGetContinents = () => {
    const { data } = useQuery<AllContinents>(GET_CONTINENTS);
    return data?.continents;
};

export const useGetCountries = () => {
    const { data } = useQuery<AllCountires>(GET_COUNTRIES);
    return data?.continent.countries;
};
