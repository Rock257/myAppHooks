to avoid multiple props state trasfer from one component in a complex app 
context is nothing but a stateholder which store multiple states which further can be shared to other component of complex app  using context api 

to crate context  

import {createContext} from 'react' ;

const noteContext  = createContext() ;

export default noteContext ;