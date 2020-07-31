import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "@apollo/client";
import styled from "styled-components";

const H1 = styled.h1`
  cursor: default;
  font-family: Roboto;
  text-shadow: 8px 8px 0px #000;
  letter-spacing: 0.5px;
  font-size: 288px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const QUERY = gql`
  query ($login: String!) {
    user(login: $login) {
      id
      name
      repositories(first: 100) {
        edges {
          node {
            id
            name
            url
            createdAt
            databaseId
            descriptionHTML
            updatedAt
            isArchived
            homepageUrl
            forkCount
            __typename
          }
        }
      }
    }
  }
`;

function BigNumber({ login }) {
  const { data, loading, error } = useQuery(QUERY, {
    variables: {
      login,
    }
  });

  if (loading) {
    return <span style={{ fontSize: '24px', color: 'white', fontWeight: 'bold', fontFamily: 'Roboto' }}>Loading...</span>;
  }

  if (error) {
    return <span style={{ fontSize: '24px', color: 'white', fontWeight: 'bold', fontFamily: 'Roboto' }}>Error!</span>;
  }

  if (data) {
    return <H1>{data.user.repositories.edges.length}</H1>;
  }
}

export default BigNumber;
