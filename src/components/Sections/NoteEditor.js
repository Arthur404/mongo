import React, {Component} from 'react'
import ColorPicker from './ColorPicker';
import './NoteEditor.scss'

class NoteEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            color: '#3f8eff'
        };
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    };

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    };

    handleColorChange = (color) => {
        this.setState({ color });
    }

    handleNoteAdd = () => {
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };

        this.props.onNoteAdd(newNote);

        this.setState({
            title: '',
            text: '',
            color: '#9dff6b'
        })
    };

    render() {
        return (
            <section className='NoteEditor'>
                <input
                    type="text"
                    className='NoteEditor__title'
                    placeholder='Enter title'
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <textarea
                    rows={5}
                    className='NoteEditor__text'
                    placeholder='Enter text'
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <div className='NoteEditor__footer'>
                    <ColorPicker
                        value={this.state.color}
                        onChange={this.handleColorChange}
                    />
                    <button
                        className='NoteEditor__button'
                        disabled={!this.state.text}
                        onClick={this.handleNoteAdd}
                    >
                        Add
                    </button>
                </div>
            </section>
        );
    }
}

export default NoteEditor;