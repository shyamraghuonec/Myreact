import React, { useState } from 'react'


export default function Textform(props) {
      const copy = () => {
            let textarea = document.getElementById('textarea')
            textarea.select()
            navigator.clipboard.writeText(textarea.value)
            props.showAlert('Copy to clipboard', 'success ')
      }
      const removeExtraSpaces = () => {
            let newText = text.split(/[ ]+/)
            setText(newText.join(' '))
            props.showAlert('Remove extra spaces', 'success ')

      }
      const toUpper = () => {
            // console.log('Uppercase was clicked');
            const newText = text.toUpperCase()
            setText(newText)
            props.showAlert('Conver into Uppercase', 'success ')

      }

      const title = () => {
            let newText = text.split(/[ ]+/)
                  setText(newText.join(' '))
            let splitText = text.toLowerCase().split(' ')

            splitText.forEach((e) => {
                  if (e === '') {
                        splitText.pop()
                  }
            })

            for (let i = 0; i < splitText.length; i++) {
                  
                  splitText[i] = splitText[i][0].toUpperCase() + splitText[i].slice(1)

            }
            setText(splitText.join(' '))
            props.showAlert('Conver into Title Case', 'success ')



      }
      const clear = () => {
            // console.log('Uppercase was clicked');
            let conf = window.confirm('You are sure! You want to delete this text')
            if (conf === true) {
                  const newText = ' '
                  setText(newText)
                  props.showAlert('Clear text', 'success ')

            }
            else {
                  setText(text)
                  props.showAlert('Cancel clear text', 'danger ')

            }
      }
      const toLower = () => {
            // console.log('Uppercase was clicked');
            const newText = text.toLowerCase()
            setText(newText)
            props.showAlert('Convet into Lowercase', 'success ')

      }
      const handleOnChange = (event) => {
            // console.log('on change');
            setText(event.target.value)
            // setText('you change the text of input')
      }
      const [text, setText] = useState('')
      return (
            <div className="mb-3">
                  <h1 className='my-3 mb-3'>{props.heading}</h1>

                  <textarea placeholder='Enter here' onChange={handleOnChange} value={text} className={`form-control bg-${props.mode} text-${props.textColor}`}
                        id="textarea" cols="30" rows="10"></textarea>
                  <div id="emailHelp" className="form-text">We'll never share your text with anyone else.</div>

                  <button type="submit" onClick={toUpper} className="btn btn-primary my-3">Convert into UpperCase</button>
                  <button type="submit" onClick={toLower} className="btn btn-primary mx-3">Convert into LowerCase</button>
                  <button type="submit" onClick={clear} className="btn btn-primary">Clear Text</button>
                  <button type="submit" onClick={title} className="btn btn-primary mx-3">Title Case</button>
                  <button type="submit" onClick={copy} className="btn btn-primary ">Copy Text</button>
                  <button type="submit" onClick={removeExtraSpaces} className="btn btn-primary mx-3 ">RemoveExtraSpaces</button>

                  <h1 className='my-3'>Your Text Summary</h1>
                  <p><b>{text.split(' ').length}</b> words and <b>{text.length}</b> characters</p>
                  <p><b>{text.split(' ').length * 0.008}</b> ! to read</p>
                  <h1>Preview Text here</h1>
                  <p>{text.length > 0 ? text : 'Enter text to preview'}</p>
            </div>

      )
}
