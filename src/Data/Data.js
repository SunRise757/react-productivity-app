//TODO: literally everything

export const getAllProjects = () => {
    var projectKeys = Object.entries(localStorage);
    //var projectsArray = [];
    for(let i = 0; i < projectKeys.length; i++){
        //projectsArray.push(JSON.parse(projectKeys[i][1]));
        projectKeys[i][1] = JSON.parse(projectKeys[i][1]);
    }

    return projectKeys;
    //return projectsArray;
    /*
    return(
        [
            {
                name: "PROJECT 0",
                teamName: "props.data.teamName",
                status: "pending",
                timeLeft: "props.data.timeLeft",
                description: "props.data.description",
                tasks: [
                    {
                        complete: true,
                        name: "Task Name 1",
                        date: "Date 1",
                    },
                    {
                        complete: false,
                        name: "Task Name 2",
                        date: "Date 2",
                    },
                    {
                        complete: false,
                        name: "Task Name 3",
                        date: "Date 3",
                    }
                ],
                comments: "props.data.comments",
            },
            {
                name: "PROJECT 1",
                teamName: "props.data.teamName",
                status: "pending",
                timeLeft: "props.data.timeLeft",
                description: "props.data.description",
                tasks: [
                    {
                        complete: true,
                        name: "Task Name 1",
                        date: "Date 1",
                    },
                    {
                        complete: false,
                        
                        name: "Task Name 2",
                        date: "Date 2",
                    },
                    {
                        complete: false,
                        name: "Task Name 3",
                        date: "Date 3",
                    }
                ],
                comments: "props.data.comments",
            },
            {
                name: "PROJECT 2",
                teamName: "props.data.teamName",
                status: "pending",
                timeLeft: "props.data.timeLeft",
                description: "props.data.description",
                tasks: [
                    {
                        complete: true,
                        name: "Task Name 1",
                        date: "Date 1",
                    },
                    {
                        complete: false,
                        name: "Task Name 2",
                        date: "Date 2",
                    },
                    {
                        complete: false,
                        name: "Task Name 3",
                        date: "Date 3",
                    }
                ],
                comments: "props.data.comments",
            },
        ]
    )*/
}
//works only for 1 deep field
export const setFieldInProject = (projectKey, field, value) => {
    let item = JSON.parse(localStorage.getItem(projectKey));
    item[field] = value;
    localStorage.setItem(projectKey, item);
}

export const setProject = (projectKey, value) => {
    localStorage.setItem(projectKey, JSON.stringify(value));
}


/*
const changeData = () => {
}
*/