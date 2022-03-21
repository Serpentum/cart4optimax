import React from "react";
import s from './Layout.module.css'

type LayoutProps = {
  children?: React.ReactElement
}

const Layout = ({children}: LayoutProps): JSX.Element => {

  return (
    <div className={s.mainWrapper}>
      <header className={s.header}>
        <h2>Test cart</h2>
      </header>
      <main className={s.content}>
        {children}
      </main>
      <footer className={s.footer}>
        footer
      </footer>
    </div>
  )
}

export default Layout;
