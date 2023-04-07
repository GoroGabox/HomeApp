import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ id, text, complete, completeTask, eliminateTask }) {
    return(
        <div className={complete ? 'task-container complete' : 'task-container'}>
            <div 
            className='task-text'
            onClick={() => completeTask(id)}>
                {text}
            </div>
            <AiOutlineCloseCircle
            className='task-icon'
            onClick={() => eliminateTask(id)}/>
        </div>
    )
}

export default Task