const tasksRepository = require("./tasksRepository");

describe("pruebas", () => {
    // Prueba unitaria para obtener todas las tareas
    test("Get all tasks", () => {
        // Arrange
        let tasks = [];

        // Act 
        tasks = tasksRepository.getAll();

        // Assert
        expect(tasks.length).toBe(2);
        expect(tasks.length === 2).toBe(true);
        expect(Array.isArray(tasks)).toBe(true);
    });

    // Prueba unitaria para obtener una tarea por su id
    test("Get one task by id", () => {
        // Arrange
        let task = {};

        // Act 
        task = tasksRepository.getById(1);

        // Assert
        expect(task.title === 'Task 1').toBe(true);
        expect(task.title === 'Task 100').toBe(false);
    });

    // Prueba unitaria para crear una tarea
    test("Create a task", () => {
        // Arrange
        const newTask = { id: 3, title: 'New Task', description: 'Do something new' };

        // Act 
        tasksRepository.createTask(newTask);
        const tasks = tasksRepository.getAll();

        // Assert
        expect(tasks.length).toBe(3);
        expect(tasks.find(task => task.id === 3)).toEqual(newTask);
    });

    // Prueba unitaria para actualizar una tarea
    test("Update a task", () => {
        // Arrange
        const updatedTask = { title: 'Updated Task', description: 'Updated description' };

        // Act 
        tasksRepository.updateTask(1, updatedTask);
        const task = tasksRepository.getById(1);

        // Assert
        expect(task.title).toBe('Updated Task');
        expect(task.description).toBe('Updated description');
    });

    // Prueba unitaria para eliminar una tarea
    test("Delete a task", () => {
        // Arrange
        const taskIdToDelete = 1;

        // Act 
        tasksRepository.deleteTask(taskIdToDelete);
        const tasks = tasksRepository.getAll();

        // Assert
        expect(tasks.length).toBe(2);
        expect(tasks.find(task => task.id === taskIdToDelete)).toBeUndefined();
    });
});
