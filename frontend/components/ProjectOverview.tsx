// @flow
import * as React from 'react';
import Link from 'next/link';
import {ProjectCover} from './ProjectCover';
import {type ProjectEntity} from '../graphql/sdk';

type Props = {
	project: ProjectEntity;
};
export const ProjectOverview = ({project}: Props) => (
	<Link href={'/project/' + project.attributes!.seoUrl} className='project-overview'>
		<ProjectCover project={project}/>
		<div className='project-overview-info'>
			<h2>{project.attributes!.title}</h2>
			<p>{project.attributes!.overview}</p>
		</div>
	</Link>
);
