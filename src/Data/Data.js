//TODO: literally everything

export const getAllProjects = () => {
    var projectKeys = Object.entries(localStorage);
    //var projectsArray = [];
    for(let i = 0; i < projectKeys.length; i++){
        //projectsArray.push(JSON.parse(projectKeys[i][1]));
        projectKeys[i][1] = JSON.parse(projectKeys[i][1]);
    }

    projectKeys = projectKeys.sort();

    return projectKeys;
}

export const setFieldInProject = (projectKey, field, value) => {
    let item = JSON.parse(localStorage.getItem(projectKey));
    item[field] = value;
    localStorage.setItem(projectKey, item);
}

export const setProject = (projectKey, value) => {
    localStorage.setItem(projectKey, JSON.stringify(value));
}

export const addProject = () => {
    var projectKeys = Object.entries(localStorage);
    projectKeys = projectKeys.sort();
    
    let newKey = 1;
    if(projectKeys[projectKeys.length-1])
        newKey = projectKeys[projectKeys.length-1][0];
    while(localStorage.getItem(newKey))
        newKey++;
    console.log(newKey);
    let newProject = {
        name: "New project",
        teamName: "New team",
        status: "pending",
        timeLeft: "props.data.timeLeft",
        description: "Project description",
        tasks: [
            {
                complete: false,
                name: "Task 1",
                date: "Date 1",
            }
        ],
        comments: "props.data.comments",
    };
    setProject(newKey, newProject);
}

export const doesProjectExist = (key) => {
    if(localStorage.getItem(key)) return true;
    return false
}

export const deleteProject = (key) => {
    localStorage.removeItem(key);
}
