import React, {Component} from 'react'
import './LocateEditor.scss'

class LocateEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            address: ''
        };
    }

    handleCityChange = (e) => {
        this.setState({
            city: e.target.value
        })
    };

    handleAddressChange = (e) => {
        this.setState({
            address: e.target.value
        })
    };

    handleLocateAdd = () => {
        const newLocate = {
            city: this.state.city,
            address: this.state.address
        };

        this.props.onLocateAdd(newLocate);

        this.setState({
            city: '',
            address: ''
        })
    };

    render() {
        return (
            <section className='LocateEditor'>
                <input
                    type="text"
                    className='LocateEditor__title'
                    placeholder='Enter city'
                    value={this.state.city}
                    onChange={this.handleCityChange}
                />
                <textarea
                    rows={5}
                    className='LocateEditor__text'
                    placeholder='Enter address'
                    value={this.state.address}
                    onChange={this.handleAddressChange}
                />
                <div className='LocateEditor__footer'>
                    <button
                        className='LocateEditor__button'
                        disabled={!this.state.address}
                        onClick={this.handleLocateAdd}
                    >
                        Add
                    </button>
                </div>
            </section>
        );
    }
}

export default LocateEditor;