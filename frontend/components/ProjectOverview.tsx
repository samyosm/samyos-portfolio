// @flow
import * as React from 'react';
import {Project} from "../types/Project";

type Props = {
  project: Project;
};
export const ProjectOverview = ({project}: Props) => {
  return (
    <div className="project">
      <h2>{project.title}</h2>
      <p>{project.overview}</p>
    </div>
  );
};