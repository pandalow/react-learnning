import Button from './Button'
import noProjectImage from '../assets/no-projects.png';
export default function DefaultPage({ handleAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3 ">
      <img className='w-16 h-16 object-contain mx-auto' src={noProjectImage} alt="An empty task list"/>
      <h2 className='text-xl font-bold text-stone-500 mt-4'>No Project Selected</h2>
      <p className='text-stone-400 mb-4'>Select a project or get started with a new one</p>
      <Button children='Create New Project' onClick={handleAddProject}/>
    </div>
  )
}