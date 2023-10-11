import './FaceRecognition.css'

export default function FaceRecognition({ imageUrl, box }) {
  const styles = {
    top: box.topRow,
    right: box.rightCol,
    bottom: box.bottomRow,
    left: box.leftCol
  }
  return (
    <div className='center ma'>
      <div className="absolute mt2">
        <img 
          id='input-image' 
          src={imageUrl} 
          alt="" 
          width="500px" 
          height="auto"
        />
        <div className='bounding-box' style={styles}></div>
      </div>
    </div>
  )
}