import './ImageLinkForm.css'

export default function ImageLinkForm({ onInputChange, onButtonSubmit }) {
 
  return(
    <div>
      <p className="f3 center text-color ph5" >
        This App will detect face in the picture. Put any image link in the input box, Give it a try.
      </p>
      <div className="center"> 
      <div className='form center pa4 br3 shadow-5'>
        <input 
          placeholder='Enter image link...'
          className=" f4 p2 w-70 center" 
          type="text" 
          onChange={onInputChange}
        />
        <button 
          className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple bold" 
          onClick={onButtonSubmit}
        >
          Detect
        </button>
      </div>
      </div>
    </div>
  )
}