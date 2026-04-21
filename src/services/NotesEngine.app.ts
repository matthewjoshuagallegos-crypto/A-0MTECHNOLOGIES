/**
 * A#0M NotesEngine.app
 * Lightweight persistence layer for Sovereign Kernel notes.
 */

interface Note {
  id: string;
  timestamp: number;
  content: string;
}

class NotesEngine {
  private notes: Note[] = [];

  createNote(content: string): Note {
    const note: Note = {
      id: Math.random().toString(36).substring(2, 9),
      timestamp: Date.now(),
      content
    };
    this.notes.push(note);
    return note;
  }

  getNotes(): Note[] {
    return [...this.notes].sort((a, b) => b.timestamp - a.timestamp);
  }

  deleteNote(id: string): boolean {
    const index = this.notes.findIndex(n => n.id === id);
    if (index !== -1) {
      this.notes.splice(index, 1);
      return true;
    }
    return false;
  }
}

export const notesEngine = new NotesEngine();
