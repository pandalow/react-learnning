export default function DefaultPage({handleAddProject}) {
    return(
        <div>
        <h1>No Project Selected</h1>
        <h2>Select a project or get started with a new one</h2>
        <button onClick={handleAddProject}>Create new project</button>
      </div>
    )
}