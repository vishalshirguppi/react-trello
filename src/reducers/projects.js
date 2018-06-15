import { activeProject } from "../helperFunctions/activeProject";

const allProjects = [];

const projectReducer = (state = allProjects, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [...state, action.project ];
    case "ADD_LIST":
      const { projectId } = action.list;
      return state.map((project) => {
        if(project.id !== projectId){
          return project
        }
        return Object.assign({}, project, {
          data : {
            ...project.data,
            [action.list.id] : action.list
          }
      })
      })
    default:
      return state;
  }
};

export default projectReducer;
