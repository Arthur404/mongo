import React, {Component} from 'react'

import './Note.scss'

class Note extends Component {
    render() {
        const style = {
            backgroundColor: this.props.color
        };

        return (
            <section className='Note' style={style}>
                <span className='Note__del-icon' onClick={this.props.onDelete}> x </span>
                {
                    this.props.title
                    ?
                        <h4 className='Note__title'>{this.props.title}</h4>
                    :
                        null
                }
                <div className='Note__text'>{this.props.children}</div>
            </section>
        )
    }
}

export default Note;