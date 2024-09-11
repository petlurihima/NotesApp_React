## Live Demo

You can view the live application [here](https://notesapp-react.onrender.com).


# NotesApp

## Overview

NotesApp is a simple note-taking application built with React, Vite, and Bootstrap. It allows users to create, edit, and delete notes, with data persistence through the use of `localStorage`.

## Features

- Create new notes
- Edit existing notes
- Delete notes
- Data persistence with `localStorage`
- Responsive design using Bootstrap

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/NotesApp.git
   cd NotesApp
2.Install the dependencies:
    npm install
3.Running the App:
    npm run dev
4.Build for production:
    npm run build

Components
 - Heading.jsx: Displays the application heading.
 - CreateNote.jsx: Contains the form for creating and editing notes, and displays the list of notes.

Usage
Adding a Note:
 - Enter a note in the input field.
 - Click the "Add Note" button to save the note.
Editing a Note:
 - Click the "Edit" button next to the note you want to edit.
 - Modify the note in the input field.
 - Click the "Update Note" button to save changes.
Deleting a Note:
 - Click the "Delete" button next to the note you want to delete.
