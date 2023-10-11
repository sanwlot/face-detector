import Tilt from 'react-parallax-tilt';
import brain from './brain.png'

export default function Logo() {
  return (
    <div className="ma4 mt0" style={{ width: '150px', position: 'relative' }}>
       <Tilt>
        <div style={{ 
          height: '150px', 
          background: 'linear-gradient(90deg, rgba(2,0,36,.4) 0%, rgba(9,9,121,.4) 0%, rgba(0,212,255,.4) 100%)'
        }}>
          <div className='center'>
            <img 
              src={brain} 
              alt="logo" 
              style={{
                position: 'absolute',
                top: 40,
                left: 40
              }}
            />
          </div>
        </div>
      </Tilt>
    </div>
  )
}