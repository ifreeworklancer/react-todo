import axios from "axios";

export default class TodoService {
    static async getTodoList() {
        const todoList = await axios.get('https://jsonplaceholder.typicode.com/todos', {
            params: {
                _limit: 10
            }
        })
        return todoList.data
    }
}
