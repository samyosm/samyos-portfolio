// @flow
import * as React from 'react';
import {When} from 'react-if';
import Image from 'next/image';
import {type ProjectEntity} from '../graphql/sdk';

type Props = {
	project: ProjectEntity;
};
export const ProjectCover = ({project}: Props) => {
	const url = project.attributes?.cover?.data?.attributes?.url;
	const imageSrc = 'http://localhost:1337' + url!;
	return (
		<When condition={url !== undefined}>
			<Image
				alt={project.attributes!.title}
				src={imageSrc}
				loader={() => imageSrc}
				width='1280'
				height='720'
			/>
		</When>
	);
};
