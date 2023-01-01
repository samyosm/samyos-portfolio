// @flow 
import * as React from 'react';
import {Project} from "../../types/Project";
import {GetStaticPaths, GetStaticProps} from "next";
import {apolloClient} from "../../contexts/ApolloClient";
import {GET_PROJECT, GET_PROJECT_URLS} from "../../queries/Strapi";
import Head from "next/head";
import {Sidebar} from "../../components/Sidebar";
import ReactMarkdown from "react-markdown";
import {When} from "react-if";
import Image from "next/image";

type Props = {
  project: Project;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const {data: {projects: {data}}} = await apolloClient.query({
    query: GET_PROJECT_URLS,
  });

  const paths = data.map((el: any) => ({params: {seoUrl: el.attributes.seoUrl}}));

  return {
    paths,
    fallback: "blocking"
  }
}


export const getStaticProps: GetStaticProps<Props> = async (context) => {
  if (!context.params) return {props: {} as Props}; // TODO: Not good practice

  const {data: {projects: {data}}} = await apolloClient.query({
    query: GET_PROJECT,
    variables: {
      seoUrl: context.params.seoUrl
    }
  })
  return {
    props: {
      project: data[0].attributes
    }
  }
}


const ProjectPage = ({project}: Props) => {
  const imageSrc = "http://localhost:1337" + project.cover?.data?.attributes.url;
  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>
      <main className="main">
        <Sidebar />
        <div className="main-body">
          <h1>{project.title}</h1>
          <When condition={project.cover?.data !== null}>
            <Image
              alt={project.title}
              src={imageSrc}
              loader={() => imageSrc}
              width="1280"
              height="720"
            />
          </When>
          <ReactMarkdown>
            {project.details}
          </ReactMarkdown>
        </div>
      </main>
    </>
  );
};

export default ProjectPage;