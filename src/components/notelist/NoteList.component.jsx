import Note from "../note/Note.component";

import tasks from "../../tasks";

import "./NoteList.style.css";

function createNote(note) {
    return (
        <Note
            key={note.id}
            taskId={note.id}
            title={note.title}
            text={note.text}
        />
    );
}

function NoteList() {
    return <div className="note-list">{tasks.map(createNote)}</div>;
}

export default NoteList;
