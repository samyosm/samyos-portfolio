import Head from 'next/head'
import {GetStaticProps} from "next";
import {apolloClient} from "../contexts/ApolloClient";
import {Project} from "../types/Project";
import {Sidebar} from "../components/Sidebar";
import {GET_PROJECTS} from "../queries/Strapi";
import {ProjectOverview} from "../components/ProjectOverview";

export const getStaticProps: GetStaticProps = async (context) => {
  const {data: {projects: {data}}} = await apolloClient.query({
    query: GET_PROJECTS
  });

  const projects = data.map((el: { attributes: Project; }) => el.attributes);

  return {
    props: {
      projects,
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

        <Sidebar />

        <div className="projects">
          <h3>Projects</h3>
          {projects.map((project) => <ProjectOverview key={project.seoUrl} project={project}/>)}
        </div>

      </main>
    </>
  )
}
