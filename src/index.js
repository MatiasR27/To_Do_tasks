import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

//Para almacenar la lista de tareas
export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );


// Para almacenar la nueva tarea creada
// const tarea  = new Todo('Aprender Javascript');
// const tarea2 = new Todo('Aprender Ingles');

todoList.todos[0].imprimirTodo();  
//todoList.nuevoTodo( tarea );
//todoList.nuevoTodo( tarea2 );

//tarea.completado = true


