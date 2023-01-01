// @flow
import * as React from 'react';
import {Project} from "../types/Project";
import {If, Then, When} from "react-if";
import Image from "next/image"
import Link from "next/link";

type Props = {
  project: Project
};
export const ProjectOverview = ({project}: Props) => {
  const imageSrc = "http://localhost:1337" + project.cover?.data?.attributes.url;
  return (
    <Link href={"/" + project.seoUrl} className="project-overview">
      <When condition={project.cover?.data !== null}>
        <Image
          alt={project.title}
          src={imageSrc}
          loader={() => imageSrc}
          width="1280"
          height="720"
        />
      </When>
      <div className="project-overview-info">
        <h1>{project.title}</h1>
        <p>{project.overview}</p>
      </div>
    </Link>
  );
};