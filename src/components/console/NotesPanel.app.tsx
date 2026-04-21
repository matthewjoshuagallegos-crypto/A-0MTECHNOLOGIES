import React, { useState } from 'react';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { notesEngine } from './../../services/NotesEngine.app';

export default function NotesPanel() {
  const [notes, setNotes] = useState(notesEngine.getNotes());
  const [input, setInput] = useState('');

  const addNote = () => {
    if (!input.trim()) return;
    notesEngine.createNote(input);
    setNotes(notesEngine.getNotes());
    setInput('');
  };

  const deleteNote = (id: string) => {
    notesEngine.deleteNote(id);
    setNotes(notesEngine.getNotes());
  };

  return (
    <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 text-neutral-300 font-mono">
      <h2 className="text-sm font-black uppercase text-accent mb-4 flex items-center gap-2">
        <InsertDriveFileIcon  /> A#0M Sovereignty Notes
      </h2>
      <div className="flex gap-2 mb-4">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-neutral-900 border border-neutral-700 px-3 py-2 rounded-lg text-xs"
          placeholder="New note segment..."
        />
        <button onClick={addNote} className="bg-accent text-black px-4 py-2 rounded-lg text-xs font-bold uppercase hover:opacity-90">
          <AddIcon  />
        </button>
      </div>
      <div className="space-y-2">
        {notes.map(note => (
          <div key={note.id} className="bg-neutral-900 p-3 rounded-lg border border-neutral-800 flex justify-between items-center text-xs">
            <span>{note.content}</span>
            <button onClick={() => deleteNote(note.id)} className="text-red-500 hover:text-red-400">
              <DeleteIcon  />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
