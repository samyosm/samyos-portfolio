// @flow
import * as React from 'react';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { GetStaticProps } from 'next';
import { AboutMeEntity } from '../graphql/sdk';
import Sidebar from '../components/Sidebar';
import graphQlClient from '../graphql/GClient';

type Props = {
  aboutMe: AboutMeEntity,
};
export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await graphQlClient.getAboutMe();

  const aboutMe = response.aboutMe!.data!;

  return {
    props: {
      aboutMe,
    },
  };
};
export default function About({ aboutMe }: Props) {
  return (
    <>
      <Head>
        <title>About me</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="main">

        <Sidebar activeLabel="About" />

        <div className="main-body about-page">
          <h4>About me</h4>
          <ReactMarkdown
            transformImageUri={(uri) => (uri.startsWith('http') ? uri : `http://localhost:1337${uri}`)}
          >
            {aboutMe.attributes!.body}
          </ReactMarkdown>
        </div>

      </main>
    </>
  );
}
