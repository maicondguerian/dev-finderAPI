import styles from './container.module.css'

export const Container = ({children}) => {
  return (
    <div id={styles.globalContainer}>
      {children}
    </div>
  )
}
