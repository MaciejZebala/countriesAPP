import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { ListCountries } from '../components/ListCountries/ListCountries';
import { useGetCountries } from '../hooks/useGetCountries';

const CountriesWrapper = styled.div``;

const Loader = styled.div`
    margin: 200px auto;
    border: 10px solid #f3f3f3;
    border-radius: 50%;
    border-top: 10px solid #ffc32b;
    width: 150px;
    height: 150px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;

    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;

export const Countries: React.FC = () => {
    const { code } = useParams<{ code: string }>();
    const { loading, error, data } = useGetCountries({ variables: { code } });
    const countries = data?.continent.countries;
    if (loading) return <Loader></Loader>;
    if (error) return <p>Error</p>;
    return <CountriesWrapper>{<ListCountries countries={countries || []} />}</CountriesWrapper>;
};
