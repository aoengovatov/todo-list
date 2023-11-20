import styles from './TodoListApp.module.css';
import { CaseComponent } from './components/CaseComponent/CaseComponent';
import { useState, useEffect } from 'react';

export const TodoListApp = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((loadedData) => loadedData.json())
      .then((loadedTodos) => {
        setTodos(loadedTodos);
      })
      .finally(() => setIsLoading(false))
  }, []);
  
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Список дел</h1>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        todos.map(({id, title}) => (
        <CaseComponent key={id}>{title}</CaseComponent>
      )))}
    </div>
  )
}
