import styles from './navTopBar.module.css'

const NavTopBar = ({ toggleBar, showBar }) => {
  return (
    <main className={styles.container}>
      <div>
        <h1>Dashboard - Gallery</h1>
        <button onClick={() => toggleBar()}>{showBar ? 'Hide' : 'Show'}</button>
      </div>
    </main>
  )
}

export default NavTopBar
