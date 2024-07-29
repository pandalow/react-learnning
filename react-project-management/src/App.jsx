import React from "react";
import { useState, useRef } from "react";
import ProjectCreation from "./components/ProjectCreation";
import ProjectSideBar from "./components/ProjectSideBar";
import ProjectDetails from "./components/ProjectDetails";
import DefaultPage from "./components/DefaultPage";


function App() {
  const [projectsState, setProjectsState] = useState(
    {
      selectedProject: undefined,
      projects: [],
      tasks:[]
    }
  )
  function handleClickedProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: id
      }
    });
  }

  function handleAddProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProject: null
    }));
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProject: undefined
    }));
  }

  // This Part is called props drilling
  function handleAddTask(text) { 
    setProjectsState(prevState => {
      const taskId = Math.random()
      const newTask = {
        text:text,
        projectId:prevState.selectedProject,
        id: taskId
      }
      return {
        ...prevState,
        projects: [...prevState.tasks, newTask]
      }
    });
  }
  function handleDeleteTask(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        task: prevState.projects.filter(task => task.id !== id)
      }
    });
   }

  function handleSave(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random()

      const newProject = {
        ...projectData,
        id: projectId
      }
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject
        ]
      }
    });
  }

  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProject)
      }
    });
  }
  const chooseProject = projectsState.projects.find(project => project.id === projectsState.selectedProject);

  let content = <ProjectDetails
    project={chooseProject}
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask} 
    tasks={projectsState.tasks}
    />;

  if (projectsState.selectedProject === null) {
    content = <ProjectCreation handleSave={handleSave} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProject === undefined) {
    content = <DefaultPage handleAddProject={handleAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        handleAddProject={handleAddProject}
        projects={projectsState.projects}
        onSelectProject={handleClickedProject}
      />
      {content}
    </main>
  );
}

export default App;
