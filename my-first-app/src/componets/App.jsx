
import painting from '../painting.json'
import {GalleryList} from './GalleryItem/GalleryList/GalleryList'

const item = painting[0]



export const App = () => {

    return(

        <>
        <GalleryList items={painting}/>
</>
    )
}