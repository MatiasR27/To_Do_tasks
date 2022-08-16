import { Todo } from "./todo.class";

export class TodoList {

    constructor() {
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();

    }

    marcarCompletado( id ) {

        for( const todo of this.todos ) {
            if( todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {

        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        
        localStorage.setItem('todo', JSON.stringify(this.todos) );

    }

    cargarLocalStorage() {

        this.todos = ( localStorage.getItem('todo') ) 
                        ? JSON.parse(localStorage.getItem('todo')) 
                        : [];
        
        // Reconvierte objetos literales en instancias de clase para
        // tener acceso a los métodos que esta tiene, por ejemplo imprimir
        this.todos = this.todos.map( Todo.fromJson );
                                // obj => Todo.fromJson( obj )

    }
}