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

  function handleExportFile() {
    // Combine projects and tasks into one object
    const data = JSON.stringify({
      projects: projectsState.projects,
      tasks: projectsState.tasks
    });
    
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'projects.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleExportFile() {
    const data = JSON.stringify({
      projects: projectsState.projects,
      tasks: projectsState.tasks
    });

    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'projects.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImportFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const importedData = JSON.parse(e.target.result);
      setProjectsState(prevState => ({
        ...prevState,
        projects: [...prevState.projects, ...importedData.projects],
        tasks: [...prevState.tasks, ...importedData.tasks]
      }));
    };
    reader.readAsText(file);
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
        tasks: [...prevState.tasks, newTask]
      }
    });
  }

  function handleDeleteTask(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.projects.filter(task => task.id !== id)
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
        handleExport={handleExportFile}
        handleImport={handleImportFile}
      />
      {content}
    </main>
  );
}

export default App;
