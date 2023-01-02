import Head from 'next/head';
import {type GetStaticProps} from 'next';
import {apolloClient} from '../contexts/ApolloClient';
import {type Project} from '../types/Project';
import {Sidebar} from '../components/Sidebar';
import {getProjects} from '../queries/Strapi';
import {ProjectOverview} from '../components/ProjectOverview';
import React from 'react';

export const getStaticProps: GetStaticProps = async context => {
	const {data: {projects: {data}}} = await apolloClient.query({
		query: getProjects,
	});

	const projects = data.map((el: {attributes: Project}) => el.attributes);

	return {
		props: {
			projects,
		},
	};
};

export default function Home({projects}: {projects: Project[]}) {
	return (
		<>
			<Head>
				<title>Samyos</title>
				<meta name='viewport' content='width=device-width, initial-scale=1'/>
			</Head>
			<main className='main'>

				<Sidebar/>

				<div className='main-body'>
					<h4>Projects</h4>
					{projects.map(project => <ProjectOverview key={project.seoUrl} project={project}/>)}
				</div>

			</main>
		</>
	);
}
