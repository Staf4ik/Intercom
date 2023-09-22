import { getByDisplayValue } from '@testing-library/react'
import { useState } from 'react'
import styles from './Support.module.css'
import mail from '../images/mail.png'
import note from '../images/note.png'
import Modal from './Modal'

const Support = () => {
  const [ApplicationActive, setApplicationActive] = useState(false)
  const [ApplicationComletedActive, setApplicationComletedActive] =
    useState(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        {/* <div className={styles.block}>
          <div className={styles.header}> */}
        <h1 className={styles.mainTitle}> Поддержка </h1>
        {/* </div>
        </div> */}
        <div className={styles.display}>
          <div className={styles.block}>
            <h2 className={styles.title1}>Заявка в чат</h2>
            <p className={styles.column1}>
              Напишите в Telegram или оставьте заявку. Наша служба поддержки
              быстро поможет с любым вопросом.
            </p>
            <div className={styles.block}>
              <p>
                <img src={mail}></img>
                <a href="#" onClick={() => setApplicationActive(true)}>
                  Оставить заявку
                </a>
              </p>
              <p className={styles.mt}>
                <img src={note}></img>
                <a href="#">Написать в Telegram</a>
              </p>
            </div>
          </div>
          <div className={styles.block}>
            <h2 className={styles.title1}>Позвонить</h2>
            <p className={styles.column2}>
              Часы работы (мск): пн – пт: 08:00 – 21:00 сб – вс: 09:00 – 20:00
            </p>
            <div className={styles.column22}>
              <p className={styles.discription}>Телефон в Екатеринбурге</p>
              <p className={styles.text}>+ 7 343 366-78-78</p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}></div>

        {/* окно заявки*/}
        <Modal active={ApplicationActive} setActive={setApplicationActive}>
          <h1 className={styles.Application__title}>Заявка в поддержку</h1>
          <p className={styles.Application__text}>
            Пожалуйста опишите проблему, как можно подробнее
          </p>
          <textarea
            className={styles.textarea}
            placeholder="Не работает интернет по ночам, в танки не поиграть!"
          ></textarea>
          <button
            className={styles.button__send}
            onClick={() => {
              setApplicationActive(false)
              setApplicationComletedActive(true)
            }}
          >
            Отправить
          </button>
        </Modal>

        {/* заявка отправлена*/}
        <Modal
          active={ApplicationComletedActive}
          setActive={setApplicationComletedActive}
        >
          <h1 className={styles.Application__title}>Заявка отправлена</h1>
          <p className={styles.Application__text}>
            Ответим на ваше обращение в течении 24 часов
          </p>
        </Modal>
      </div>
    </div>
  )
}

export default Support
