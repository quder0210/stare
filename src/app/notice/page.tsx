import styles from '@/styles/Notice/Notice.module.css'

export default function Page() {
    return (
        <div className={styles.container}>
            <h1>This is Notice</h1>
            <div className={styles.noticeBox}>
                <h1>뭐가 어떻게 되고 있는건데</h1>
                <h1>일단 마음에 안들어</h1>
            </div>
        </div>
    )
}