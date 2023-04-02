// import {useState,useEffect} from "react";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
import { ContactForm } from "./Form";
import css from './Phonebook.module.css'


export function App() {

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
      <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        <ContactList/>
        
        
      </div>  
    </div>
  )
}
