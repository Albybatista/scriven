class App extends React.Component {
    state = {
        notes: []
    }

    componentDidMount = () => {
        axios.get('/notes').then(
            (response) => {
                this.setState({
                    notes: response.data
                })
            }
        )
    }

    // =========
    //  CREATE
    // =========
    createNote = (event) => {
        event.preventDefault();
        event.target.reset();
        axios.post(
            '/notes',
            {
                dated: this.state.newNoteDated,
                title: this.state.newNoteTitle,
                codeLanguage: this.state.newNoteCodeLanguage,
                codeBlock: this.state.newNoteCodeBlock,
                comments: this.state.newNoteComments,
            }
        ).then(
            (response) => {
                this.setState({
                    notes: response.data
                })
                console.log(response.data);
            }
            
        )
        
    }

    // ============================
    // SET STATES OF CREATE VALUES
    // ============================
    addNoteDated = (event) => {
        this.setState({
            newNoteDated: event.target.value
        });
    }
    addNoteTitle = (event) => {
        this.setState({
            newNoteTitle: event.target.value
        });
    }
    addNoteCodeLanguage = (event) => {
        this.setState({
            newNoteCodeLanguage: event.target.value
        });
    }
    addNoteCodeBlock = (event) => {
        this.setState({
            newNoteCodeBlock: event.target.value
        });
    }
    addNoteComments = (event) => {
        this.setState({
            newNoteComments: event.target.value
        });
        console.log(event.target.value);
    }


    // =========
    //  DELETE
    // =========
    deleteNote = (event) => {
        axios.delete('/notes/' + event.target.value).then(
            (response) => {
                this.setState({
                    notes: response.data
                })
            }
        )
    }

    // =========
    //  UPDATE 
    // =========
    updateNote = (event) => {
        event.preventDefault();
        event.target.reset();
        const id = event.target.getAttribute('id');
        axios.put(
            '/notes/' + id,
            {
                dated: this.state.updateNoteDated,
                title: this.state.updateNoteTitle,
                codeLanguage: this.state.updateNoteCodeLanguage,
                codeBlock: this.state.updateNoteCodeBlock,
                comments: this.state.updateNoteComments,
            }
        ).then(
            (response) => {
                this.setState({
                    notes: response.data,
                    dated: '',
                    title:'',
                    codeLanguage: '',
                    codeBlock: '',
                    comments: '',
                })
            }
        )
    }

    // =============================
    // SET STATES OF UPDATED VALUES
    // =============================
    changedNoteDated = (event) => {
        this.setState({
            updateNoteDated: event.target.value
        });
    }
    changedNoteTitle = (event) => {
        this.setState({
            updateNoteTitle: event.target.value
        });
    }
    changedNoteCodeLanguage = (event) => {
        this.setState({
            updateNoteCodeLanguage: event.target.value
        });
        console.log(event.target.value);
    }
    changedNoteCodeBlock = (event) => {
        this.setState({
            updateNoteCodeBlock: event.target.value
        });
    }
    changedNoteComments = (event) => {
        this.setState({
            updateNoteComments: event.target.value
        });
    }

    // ==========================================
    // SHOW EVERYTHING ON THE WEBPAGE LIKE SO -- 
    // ==========================================
    render = () => {
        return(
         <div className="all-body">
             {/* ====== NAVBAR ====== */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
                    <strong> Scriven</strong>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Register<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Sign In<span className="sr-only">(current)</span></a>
                    </li>
                    </ul>
                </div>
            </nav>
             
        <h2>Create Note</h2>
            {/* ====== CREATE FORM ====== */}
            {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#createModal">
                Create
            </button>
        <div className="modal fade" id="createModal" tabindex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="createFormModal">
                Add a Note
            </h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
        </button>
            </div>
        <div className="modal-body">
            <form onSubmit={this.createNote}>
                <div className="form-group" id="create-date">
                    <label for="create-date-label" className="col-form-label">
                        <strong>Date: </strong>
                    </label>
                <input className="form-control" onKeyUp={this.addNoteDated} type="date" />
                </div>
                <div className="form-group" id="create-title">
                    <label for="create-title-label" className="col-form-label">
                        <strong>Title: </strong>
                    </label>
                <input className="form-control" onKeyUp={this.addNoteTitle} type="text" />
                </div>
                <div className="form-group" id="create-lang">
                    <label for="create-lang-label" className="col-form-label">
                        <strong>Language: </strong>
                    </label>
                <select className="form-control" onKeyUp={this.addNoteCodeLanguage}>
                    <option></option>
                    <option>HTML</option>
                    <option>CSS</option>
                    <option>JavaScript</option>
                </select>
                </div>
                <div className="form-group" id="create-cBlock">
                    <label for="create-cBlock-label" className="col-form-label">  
                        <strong>Code Block: </strong>
                    </label> 
                <textarea className="form-control" onKeyUp={this.addNoteCodeBlock} type="text" />
                </div>
                <div className="form-group" id="create-notes">
                    <label for="create-comments-label" className="col-form-label">    
                        <strong>Notes: </strong>
                    </label>
                <textarea className="form-control" onKeyUp={this.addNoteComments} type="text" />
                </div>
                <input type="submit" value="Create Note"/>
            </form>
        </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
                </button>
        <button type="button" className="btn btn-primary">
            Submit
        </button>
            </div>
        </div>
    </div>
</div>
    <h2>List of notes</h2>
        {
            this.state.notes.map(
                (thisNote, index) => {
                    return <div className="mapping">
                    {/* ====== DISPLAY EXISTING NOTES ====== */}
                    <strong>Date: </strong>{thisNote.dated}<br/>
                    <strong>Title: </strong>{thisNote.title}<br/>
                    <strong>Language: </strong>{thisNote.codelanguage}<br/>
                    <strong>Code Block: </strong>
                    <pre>
                        <code className="language-javascript">
                            {thisNote.codeblock}
                        </code>
                    </pre>
                    <strong>Notes: </strong>{thisNote.comments}<br/>
                
                <button value={thisNote.id} onClick={this.deleteNote}>
                        Delete
                </button>
                <br/>
                        {/* ====== UPDATE FORM ====== */}
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateModal">
                        Edit
                </button>
            <div className="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="updateFormModal">
                Edit Note
            </h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                    &times;
                </span>
        </button>
            </div>
        <div className="modal-body">
                    <form id={thisNote.id} onSubmit={this.updateNote}>
                        <div className="form-group" id="updateDate">
                    <label for="update-date-label" className="col-form-label">
                        <strong>Date: </strong>
                    </label>
                                <input className="form-control" onKeyUp={this.changedNoteDated} type="date"/>
                                </div>
                                 <div className="form-group" id="updateTitle">
                    <label for="update-title-label" className="col-form-label">
                        <strong>Title: </strong>
                    </label>
                                    <input className="form-control" onKeyUp={this.changedNoteTitle} type="text"/>
                                    </div>
                                     <div className="form-group" id="updateLang">
                    <label for="update-lang-label" className="col-form-label">
                        <strong>Language: </strong>
                    </label>
                                    <input className="form-control" onKeyUp={this.changedNoteCodeLanguage} type="text" />
                                    </div> <div className="form-group" id="update-cBlock">
                    <label for="update-cBlock-label" className="col-form-label">
                        <strong>Code Block: </strong>
                    </label>
                                <pre>
                                    <code className="language-javascript">
                                        <textarea className="form-control" onKeyUp={this.changedNoteCodeBlock} type="text"/>
                                    </code>
                                </pre>
                                </div>
                                 <div className="form-group" id="updateComments">
                    <label for="update-comments-label" className="col-form-label">
                        <strong>Notes: </strong>
                    </label>
                                    <textarea className="form-control" onKeyUp={this.changedNoteComments} type="text" />
                                    </div>
                                    <input type="submit" value="Update"/>
                                </form>
                            </div>
                            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Close
                </button>
        <button type="button" className="btn btn-primary">
            Save
        </button>
            </div>
        </div>
    </div>
</div>
                            </div>
                        }
                    )
                }
        </div>
        )
    }
        
}

ReactDOM.render(
    <App></App>, 
    document.querySelector('main')
)