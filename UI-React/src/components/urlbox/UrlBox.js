import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import QRCode from 'qrcode.react'

const UrlBox = () => (
  	
  	<div>
    <AddTodo />
    <div className="row">
 <div className="col-md-10">
    <VisibleTodoList />
    </div>
    </div>
    <Footer />
    </div>
    
  
)

export default UrlBox