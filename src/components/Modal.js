import styles from './Modal.module.css'
// import './modal.css'

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={
        active ? `${styles.modal} ${styles.active}` : `${styles.modal}`
        // active ? 'modal active' : 'modal'
      }
      onClick={() => setActive(false)}
    >
      <div
        className={styles.modal__content}
        // className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.img} onClick={() => setActive(false)}></div>
        {children}
      </div>
    </div>
  )
}

export default Modal
