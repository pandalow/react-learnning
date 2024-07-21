export default function ProjectSideBar({ handleAddProject, projects, handleClickedProject }) {
    return (
        <div >
            <h1 className="my-8 text-center text-5xl font-bold">YOUR PROJECTS</h1>
            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={handleAddProject}>+ Add Project</button>
            <ul>
                {
                    projects.map((project, index) => {
                        return (
                            <li key={index}>
                                <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={()=> handleClickedProject(index)}>{project.title}</button>
                            </li>
                        )}
                    )}
            </ul>
        </div>
    )
};

