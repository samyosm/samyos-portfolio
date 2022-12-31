// @flow
import * as React from 'react';
import {Project} from "../types/Project";
import Link from "next/link";

type Props = {
  project: Project;
};
export const ProjectOverview = ({project}: Props) => {
  return (
    <Link href={`/project/${project.seoUrl}`} className="project">
      <h2>{project.title}</h2>
      <p>{project.overview}</p>
    </Link>
  );
};