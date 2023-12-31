import { API_URL } from '@/config/constants';
import styles from '@/components/ListCategoies.module.css'
async function fetchCategories() {
  const res = await fetch(`${API_URL}/category/view/all`);
  const data = await res.json();
  {/*console.log(data);*/}
  return data;
}

async function ListCategories() {
  const categories = await fetchCategories();
  return (
    <section>      
      <div className='row'>
      <ul className={styles.defaultItemList}>
        {
          categories.map((category: { categoryId: string, name: string }) => (
            <li key={category.categoryId}><button type="button" className="btn btn-outline-secondary btn-sm text-capitalize">{category.name}</button></li>
          ))
        }
      </ul> 
      </div>
    </section>
  )
}

export default ListCategories;
