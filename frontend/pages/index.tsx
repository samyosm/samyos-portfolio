import Head from 'next/head';
import {type GetStaticProps} from 'next';
import {Sidebar} from '../components/Sidebar';
import {ProjectOverview} from '../components/ProjectOverview';
import React from 'react';
import {graphQlClient} from '../graphql/GClient';
import {type ProjectEntity} from '../graphql/sdk';

export const getStaticProps: GetStaticProps = async context => {
	const response = await graphQlClient.getProjects();

	const projects = response.projects!.data as ProjectEntity[];

	return {
		props: {
			projects,
		},
	};
};

export default function Home({projects}: {projects: ProjectEntity[]}) {
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
					{projects.map(project => <ProjectOverview key={project.attributes!.seoUrl} project={project}/>)}
				</div>

			</main>
		</>
	);
}
