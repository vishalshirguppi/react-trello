import { activeProject } from "../helperFunctions/activeProject";

const allProjects = [];

const projectReducer = (state = allProjects, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [...state, action.project];
    case "ADD_LIST":
      const { projectId } = action.list;
      const activeProjectData = activeProject(projectId, state);
      activeProjectData["0"].data.push(action.list);
    default:
      return state;
  }
};

export default projectReducer;
