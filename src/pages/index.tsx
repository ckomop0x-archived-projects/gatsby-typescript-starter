import { graphql } from 'gatsby';
import React from 'react';

const IndexPage = () => <div>Hello from Gatsby Template</div>;

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
      }
    }
  }
`;

export default IndexPage;
