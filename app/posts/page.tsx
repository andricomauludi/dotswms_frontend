'use client'            //agar menjadi client side

import React from 'react'
import styles from "./postPage.module.css"

const Posts = () => {
  return (
    <>
    <div className={styles.bgRed}>POSTONG PAGE</div>
    <button onClick={()=>console.log("lihat user")}>mantab</button>     {/*client component */}
    </>
  )
}

export default Posts