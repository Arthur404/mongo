import React, {Component} from 'react'
import Note from './Note'
import Masonry from 'react-masonry-component';

import './NotesGrid.scss'

class NotesGrid extends Component {
    render() {
        const masonryOptions = {
            itemSelector: '.Note',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        }

        console.log(this.props.notes)

        return (
            <section className='Notes'>
                <Masonry
                    className='NotesGrid'
                    options={masonryOptions}
                >
                    {
                        this.props.notes.map(note =>
                            <Note
                                key={note.id}
                                title={note.title}
                                onDelete={this.props.onNoteDelete.bind(null, note)}
                                color={note.color}
                            >
                                {note.text}
                            </Note>
                        )
                    }
                </Masonry>
            </section>
        )
    }
}

export default NotesGrid;