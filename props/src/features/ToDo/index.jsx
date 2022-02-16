import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList/index'

ToDoFeature.propTypes = {
    
};

function ToDoFeature(props) {
    const initTodoList = [
        {
            id : 1,
            title : 'Eat',
            status: 'new'
        },
        {
            id : 2,
            title : 'Sleep',
            status: 'completed'
        },
        {
            id : 3,
            title : 'Code',
            status: 'new'
        }
    ]

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState('all');

    const handleTodoClick = (todo, index) => { 
            const newTodoList = [...todoList]

            // toggle state
            const newTodo = {
                ...newTodoList[index],
                status: newTodoList[index].status === 'new' ? 'completed' : 'new'
            };

            newTodoList[index] = newTodo;
            setTodoList(newTodoList)
    }

    const handleShowAllClick = () => {
        setFilteredStatus('all');
    }

    const handleShowCompletedClick = () => {
        setFilteredStatus('completed');
    }

    const handleShowNewClick = () => {
        setFilteredStatus('new');
    } 

    const renderedTodoList = todoList.filter(
        todo => filteredStatus === 'all' || filteredStatus === todo.status
        )
   



    return (
        <div>
            <h3>To Do List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick}/>
            <div>
                <button onClick={handleShowAllClick}>show all</button>
                <button onClick={handleShowCompletedClick}>show Completed</button>
                <button onClick={handleShowNewClick}>show New</button>
            </div>
        </div>
    );
}

export default ToDoFeature;