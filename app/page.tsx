
import Presentation from '@/components/Presentation'
import ProjectsMostViewed from '@/components/ProjectsMostViewed'
import ListCategories from '@/components/ListCategories'
import DocumentsMostViewed from '@/components/DocumentsMostViewed'

/*import styles from './page.module.css'*/
async function IndexPage():Promise<JSX.Element> {

  return (
    <>
      <Presentation/>    
      <ProjectsMostViewed/>
      <ListCategories/>
      <DocumentsMostViewed/>
    </>  
  )
}
export default IndexPage