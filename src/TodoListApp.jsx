import styles from './TodoListApp.module.css';
import { CaseComponent } from './components/CaseComponent/CaseComponent';

export const TodoListApp = () => {
  
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Список дел</h1>
      <CaseComponent>Закончить изучение объектов в JS</CaseComponent>
      <CaseComponent>Сходить в магазин</CaseComponent>
    </div>
  )
}
