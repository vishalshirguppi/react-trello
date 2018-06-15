import uuid from 'uuid';

const defaultProjectTitle = 'My First Project';

export const addProject = (projectTitle = defaultProjectTitle) => ({
    type: 'ADD_PROJECT',
    project: {
        id: uuid.v4(),
        title: projectTitle,
        data: {}
    }
});

export const addList = ({listTitle = "Planned", projectId}) => ({
    type: 'ADD_LIST',
    list: {
        id: uuid.v4(),
        title: listTitle,
        projectId: projectId,
        cards: []
    }
})

