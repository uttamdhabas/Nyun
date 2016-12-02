
import axios from 'axios';
import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'


let nextTodoId = 0
export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
}


export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
export function addUrl(url) {
  
  return dispatch => {
    
    return axios.post('/api/v1/url', {target:url.target}).then(res => {
      const data = res.data;
      if(data.new){
        dispatch(addTodo(data))
        

      }
      
      
      
    });
  };
}

