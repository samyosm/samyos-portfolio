// @flow
import * as React from 'react';
import {Project} from "../../types/Project";
import {GetStaticPaths, GetStaticProps} from "next";
import {gql} from "@apollo/client";
import {apolloClient} from "../../contexts/ApolloClient";
import Head from "next/head";
import {Navigation} from "../../components/Navigation";
import ReactMarkdown from "react-markdown";

type Props = {
  project: Project;
};

const GET_PROJECT_URLS = gql`
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

const GET_PROJECT = gql`
query GetProject($seoUrl: String!) {
  projects(filters: { seoUrl: { eq: $seoUrl}}) {
    data {
      attributes {
        seoUrl,
        title,
        details
      }
    }
  }
}
`

export const getStaticPaths: GetStaticPaths = async () => {
  const {data: {projects: {data}}} = await apolloClient.query({
    query: GET_PROJECT_URLS
  });

  const projects = data.map((el: { attributes: { seoUrl: string; }; }) => ({ params: { seoUrl: el.attributes.seoUrl}}));

  return {
    paths: projects,
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  if (!params) return {props: {}};

  const seoUrl = params.seoUrl;

  const {data: {projects: data}} = await apolloClient.query({
    query: GET_PROJECT,
    variables: {
      seoUrl,
    }
  })


  const project = data.data[0].attributes;

  return {
    props: {
      project
    },
  }
}

export default function ProjectDetail ({project}: Props) {
  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>
      <main className="main">
        <Navigation/>
        <div className="project-details">
          <h1>{project.title}</h1>
          <article>
            <ReactMarkdown>{project.details}</ReactMarkdown>
          </article>
        </div>
      </main>

    </>
  );
}