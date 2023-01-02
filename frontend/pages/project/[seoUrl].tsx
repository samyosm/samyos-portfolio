// @flow
import * as React from 'react';
import { type GetStaticPaths, type GetStaticProps } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import Sidebar from '../../components/Sidebar';
import ProjectCover from '../../components/ProjectCover';
import graphQlClient from '../../graphql/GClient';
import { type ProjectEntity } from '../../graphql/sdk';

type Props = {
  project: ProjectEntity;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await graphQlClient.getProjectUrls();

  const paths = response?.projects?.data
    .map((el) => ({ params: { seoUrl: el.attributes?.seoUrl } }));

  if (!paths) {
    throw new Error('No paths');
  }

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const response = await graphQlClient.getProject({
    seoUrl: context.params!.seoUrl as string,
  });

  const project = response.projects!.data[0] as ProjectEntity;

  if (!project) {
    throw new Error('No project');
  }

  return {
    props: {
      project,
    },
  };
};

function ProjectPage({ project }: Props) {
  return (
    <>
      <Head>
        <title>{project.attributes!.title}</title>
      </Head>
      <main className="main">
        <Sidebar />
        <div className="main-body">
          <h1>{project.attributes!.title}</h1>
          <ProjectCover project={project} />
          <ReactMarkdown>
            {project.attributes!.details}
          </ReactMarkdown>
        </div>
      </main>
    </>
  );
}

export default ProjectPage;
