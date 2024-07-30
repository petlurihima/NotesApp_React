import React from 'react';

const CreateNote = ({ handleInputChange, addNote, note, notes, handleDelete, handleEdit, isEditing }) => {
    return (
        <>
            <div className='createnote'>
                <input
                    type='text'
                    className='form-control me-2'
                    placeholder='Add Note'
                    onChange={handleInputChange}
                    value={note}
                    style={{ width: '300px', height: '50px' }}
                />
                <button className='btn btn-primary' onClick={addNote} style={{ height: '50px' }}>
                    {isEditing ? 'Update Note' : 'Add Note'}
                </button>
            </div>
            <div className='dispnote'>
                {notes.length > 0 && (
                    <>
                        <h3 className='text-center mt-4'>Added Notes are:</h3>
                        <div className='notes-container d-flex flex-wrap justify-content-center'>
                            {notes.map((item, index) => (
                                <div key={index} className='card note-card m-2' style={{ width: '18rem' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Note {index + 1}</h5>
                                        <p className="card-text">{item}</p>
                                        <button className="btn btn-primary me-2" onClick={() => handleEdit(item, index)}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default CreateNote;
