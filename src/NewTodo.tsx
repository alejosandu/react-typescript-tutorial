import React, { SyntheticEvent , useRef } from 'react'

interface NewTodoProps {
    onAddTodo: (text: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null)

    const handleSubmit = (evt: SyntheticEvent) => {
        evt.preventDefault()
        const { value } = ref.current!
        props.onAddTodo(value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="todo-text" >Todo text</label>
                <input type="text" id="todo-text" ref={ref} />
            </div>
            <button type="submit" >Add todo</button>
        </form>
    )
}

export default NewTodo