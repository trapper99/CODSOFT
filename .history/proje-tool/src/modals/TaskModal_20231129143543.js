import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import boardsSlice from '../redux/boardsSlice'
import ElipsisMenu from '../components/ElipsisMenu'
import elipsis from '../assets/icon-vertical-ellipsis.svg'
import Subtask from '../components/Subtask'
import AddEditTaskModal from './AddEditTaskModal'
import DeleteModal from './DeleteModal'

function TaskModal({ taskIndex, colIndex, setIsTaskModalOpen }) {
    const dispatch = useDispatch();
    const [isElipsisMenuOpen, setIsElipsisMenuOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const boards = useSelector((state) => state.boards);
    const board = boards.find((board) => board.isActive === true);
    const columns = board.columns;
    const col = board.columns.find((col, i) => i === colIndex);
    const task = col.tasks.find((task, i) => i === taskIndex);
    const subtasks = task.subtasks;

    let completed = 0;
    subtasks.forEach((subtask) => {
        if (subtask.isCompleted) completed++;
    });

    const [status, setStatus] = useState(task.status);
    const [newColIndex, setNewColIndex] = useState(columns.indexOf(col));
    consy
  return (
    <div>TaskModal</div>
  )
}

export default TaskModal