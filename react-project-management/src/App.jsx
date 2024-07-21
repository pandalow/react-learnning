import React from "react";
import { useState, useRef } from "react";
import ProjectCreation from "./components/ProjectCreation";
import ProjectSideBar from "./components/ProjectSideBar";
import ProjectDetails from "./components/ProjectDetails";
import DefaultPage from "./components/DefaultPage";


function App() {

  const [isCreateProject, setIsCreateProject] = useState(false);
  const [isShowProject, setIsShowProject] = useState(false);

  const [pickedProject, setPickedProject] = useState({});
  const [projects, setProjects] = useState([]);

  const projectRef = useRef();
  const taskRef = useRef();

  function handleClickedProject(index) {
    setIsShowProject(true);
    setPickedProject(projects[index]);
    console.log(pickedProject);
  }

  function handleAddProject() {
    setIsCreateProject(true);
  }

  function handleAddTask(event) {
    event.preventDefault();
    const form = taskRef.current;
    const task = form.task.value;
    const updatedProject = { ...pickedProject, tasks: [...pickedProject.tasks, task] };
    const updatedProjects = projects.map((project) => { return project.title === updatedProject.title ? updatedProject : project }
    );

    setPickedProject(updatedProject);
    setProjects(updatedProjects);
    form.reset(); // clear the input field
  }

  function handleSave(event) {
    event.preventDefault();
    const form = projectRef.current;
    const title = form.title.value;
    const description = form.description.value;
    const dueDate = form.dueDate.value;

    setProjects([...projects, { title, description, dueDate, tasks: [] }]);
    setIsCreateProject(false);

  }

  return (
    <>
    <div className="flex">
      <div className="w-1/4 bg-green-700">
      <ProjectSideBar
        handleAddProject={handleAddProject}
        projects={projects}
        handleClickedProject={handleClickedProject}
      />
      </div>
      <div className="w-3/4">
      {!(isCreateProject || isShowProject) && <DefaultPage handleAddProject={handleAddProject} />}

      {isCreateProject && <ProjectCreation
        ref={projectRef}
        saveProject={handleSave}
      />}

      {isShowProject && <ProjectDetails project={pickedProject} ref={taskRef} handleAddTask={handleAddTask} />}
      </div>
      </div>
    </>
  );
}

export default App;
