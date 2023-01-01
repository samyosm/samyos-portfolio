import {gql} from "@apollo/client";

export const GET_PROJECT = gql`
query GetProject($seoUrl: String!) {
  projects(filters: { seoUrl: { eq: $seoUrl}}) {
    data {
      attributes {
        seoUrl,
        title,
        details,
        cover {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}

`

export const GET_PROJECT_URLS = gql`
query GetProjectUrls {
  projects {
    data {
      attributes {
        seoUrl
      }
    }
  }
}
`

export const GET_PROJECTS = gql`
query GetProjects {
  projects {
    data {
      id,
      attributes {
        title,
        details,
        seoUrl,
        overview,
        cover {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
`