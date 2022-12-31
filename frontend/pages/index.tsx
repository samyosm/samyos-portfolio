import Head from 'next/head'
import {Navigation} from "../components/Navigation";
import {gql} from "@apollo/client";
import {GetStaticProps} from "next";
import {apolloClient} from "../contexts/ApolloClient";
import {Project} from "../types/Project";
import {ProjectOverview} from "../components/ProjectOverview";

const GET_PROJECTS = gql`
query GetProjects {
  projects {
    data {
      id,
      attributes {
        title,
        details,
        seoUrl,
        overview
      }
    }
  }
}
`

export const getStaticProps: GetStaticProps = async (context) => {
  const {data: {projects: {data}}} = await apolloClient.query({
    query: GET_PROJECTS,
  })

  return {
    props: {
      projects: data.map((el: { attributes: any; }) => el.attributes),
    }
  }
}
export default function Home({projects}: {projects: Project[]}) {
  return (
    <>
      <Head>
        <title>Samyos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="main">
        <Navigation/>
        <div className="projects">
          <h1>Projects</h1>
          {projects.map(project => <ProjectOverview key={project.seoUrl} project={project}/>)}
        </div>
      </main>
    </>
  )
}
