import TaskController from "../../src/controller/task"
import Database from "../../src/adapter/database"
import MockDatabase from "../../src/adapter/mock-database"
describe("Task Manager Validity", () => {
  it('Should Create Task', async () => {
    Database.createTask = jest.fn(
      MockDatabase.createTask
    );
    const task = await TaskController.createTask("name",1);
    expect(task).toEqual({ id: 1, title: 'string', status: 'TODO' });
  });
  it('Should Update Task', async () => {
    Database.updateTask = jest.fn(
      MockDatabase.updateTask
    );
    const task = await TaskController.updateTask({
      id: 1,
      title: "name",
      status: "DONE",
      order: 2
    });
    expect(task).toEqual({ id: 1, title: 'string', status: 'TODO' });
  });
});