import Image from 'next/image'
import Navegacion from './Navegacion'
export default function HeaderPrincipal() {
  return (
    <>
        <header className=''>
          <div className="row">
            <div className="col-md-12">           
              <Navegacion/>
            </div>    
          </div>
        </header>
    </>
  )
}

