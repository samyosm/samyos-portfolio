// @flow
import * as React from 'react';
import {type Project} from '../types/Project';
import {When} from 'react-if';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	project: Project;
};
export const ProjectOverview = ({project}: Props) => {
	const imageSrc = 'http://localhost:1337' + project.cover?.data?.attributes.url;
	return (
		<Link href={'/project/' + project.seoUrl} className='project-overview'>
			<When condition={project.cover?.data !== null}>
				<Image
					alt={project.title}
					src={imageSrc}
					loader={() => imageSrc}
					width='1280'
					height='720'
				/>
			</When>
			<div className='project-overview-info'>
				<h2>{project.title}</h2>
				<p>{project.overview}</p>
			</div>
		</Link>
	);
};
