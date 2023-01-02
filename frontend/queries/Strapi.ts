import {gql} from '@apollo/client';

export const getProject = gql`
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

`;

export const getProjectUrls = gql`
    query GetProjectUrls {
        projects {
            data {
                attributes {
                    seoUrl
                }
            }
        }
    }
`;

export const getProjects = gql`
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
`;
