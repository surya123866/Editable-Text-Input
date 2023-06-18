import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {textStatus: true, inputText: ''}

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({
      textStatus: !prevState.textStatus,
    }))
  }

  render() {
    const {textStatus, inputText} = this.state
    return (
      <div className="app-container">
        <div className="input-card-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {textStatus ? (
              <div className="text-container">
                <input
                  type="text"
                  onChange={this.onChangeInput}
                  value={inputText}
                />
                <div>
                  <button
                    type="button"
                    className="button"
                    onClick={this.onClickButton}
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-container">
                <p>{inputText}</p>
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickButton}
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditableText
