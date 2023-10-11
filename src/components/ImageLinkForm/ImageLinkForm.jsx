import './ImageLinkForm.css'

export default function ImageLinkForm({ onInputChange, onButtonSubmit }) {
 
  return(
    <div>
      <p className="f3 center text-color ph5" >
        {'This magic brain will detect faces in your pictures, Give it a try.'}
      </p>
      <div className="center"> 
      <div className='form center pa4 br3 shadow-5'>
        <input 
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