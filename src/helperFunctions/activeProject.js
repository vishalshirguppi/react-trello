
export const activeProject = (projectId, allProjects) => {
    const project = allProjects.filter(project => {
        return project.id == projectId;
      });
      return project;
}


