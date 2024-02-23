const request = require('supertest');
const app = require('./api'); 

// Test the /tasks GET endpoint
test('GET /tasks returns all tasks', async () => {
  const response = await request(app).get('/tasks');
  expect(response.status).toBe(200);
  expect(response.body).toHaveLength(2); // Assuming there are 2 tasks initially
});

// Test the /tasks GET endpoint
test('GET /tasks by id', async () => {
    const taskid = 1
    const response = await request(app).get(`/tasks/${taskid}`);
    expect(response.status).toBe(200);
  });


  // Test the /tasks POST endpoint
test('POST /post tasks', async () => {
    const newTask = { id: 3, title: 'Task 2', description: 'Do something else' };
    const response = await request(app).post(`/tasks/`).send({newTask});
    expect(response.status).toBe(201);
  });


  // Test the /tasks PUT endpoint
  test('PUT /put tasks', async () => {
    const updatedTask = { id: 1, title: 'Task put', description: 'Do  else' };
    const response = await request(app).put(`/tasks/1`).send({updatedTask});
    expect(response.status).toBe(200);
  });

    // Test the /tasks DELETE endpoint
    test('DELETE /delete tasks', async () => {
        const response = await request(app).delete(`/tasks/1`)
        expect(response.status).toBe(204);
      });