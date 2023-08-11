import Nav from '../components/Nav'
import Play from '../components/Play'
import '../style/Main.css'

export default function Main() {
    const items = ['item1','item2','item3','item4']
    return (
        <>
            <Nav></Nav>

           <div className='container'>

            {items.map((item, index) => (
                <Play key={index} itemName={item} />
                ))}
      </div>         
            
        </>
    )
}