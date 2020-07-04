import React from 'react'
import {connect} from 'react-redux'
import ToDoListItem from './ToDoListItem'
import ToDoInput from './ToDoInput'
import { toggleAction } from '../store/actions'

function ToDoList({ todos, title }) {

    function onTitleChange(e) {
        
        return (title = e.target.value)
    }

    function onSave() {
    
        console.log("saved-todo")
    }

    function toggleItem(item) {
        toggleAction(console.log('toggleAction', item))
    }

    return (
        <>
            <ul>
                {todos.map((item) => (
                    <ToDoListItem   key={item.id}
                                    item={item} 
                                    onToggle={toggleItem}
                                    onSave={onSave}/>
                ))}
            </ul>
            <ToDoInput title={title} onTitleChange={onTitleChange}></ToDoInput>
        </>
    )
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        item: state.todos.item,
        //log: console.log('mapStateToProps-state', state), 
    }
};

const mapDispatchToProps = {
    toggleAction,
}

export default connect( mapStateToProps, mapDispatchToProps ) (ToDoList)
