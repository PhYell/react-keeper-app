import "./note.style.css";

function Note(props) {
    return (
        <div className="note-panel">
            <div className="note-info">
                <h1 className="note-header">{props.title}</h1>
                <p className="note-text">{props.text}</p>
            </div>
            <p className="task-id">{props.taskId}</p>
        </div>
    );
}

export default Note;
