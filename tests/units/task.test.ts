import TaskController from "../../src/controller/task"
import Database from "../../src/adapter/database"
import MockDatabase from "../../src/adapter/__mocks__/database"
describe("Task Controller Test Suites", () => {
  it('Should Create Task', async () => {
    Database.createTask = jest.fn(
      MockDatabase.createTask
    );
    const task = await TaskController.createTask("name",1);
    expect(task).toEqual({ id: 1, title: 'string', status: 'TODO' });
  });

  it('Should Update Task', async () => {
    Database.getTask = jest.fn(
      MockDatabase.getTask
    );
    Database.updateTask = jest.fn(
      MockDatabase.updateTask
    );
    const task = await TaskController.updateTask({
      id: 1,
      title: "name",
      status: "DONE",
    });

    expect(task).toEqual({ id: 1, title: 'string', status: 'TODO' });
  });

  it('Should Move Task', async () => {
    Database.getTask = jest.fn(
      MockDatabase.getTask
    );
    Database.updateTask = jest.fn(
      MockDatabase.updateTask
    );
    const task = await TaskController.moveTask({
      id: 1,
      beforeId: 1,
      afterId: 1,
    });
    expect(task).toEqual({ id: 1, title: 'string', status: 'TODO' });
  });

});

describe("Task Helper Validity", () => {
  it('Should Validate Status', async () => {
    Database.createTask = jest.fn(
      MockDatabase.createTask
    );
    const task = await TaskController.createTask("name",1);
    expect(task).toEqual({ id: 1, title: 'string', status: 'TODO' });
  });

  it('Should Calculate Order', async () => {
    Database.getTask = jest.fn(
      MockDatabase.getTask
    );
    Database.updateTask = jest.fn(
      MockDatabase.updateTask
    );
    const task = await TaskController.updateTask({
      id: 1,
      title: "name",
      status: "DONE",
    });
    expect(task).toEqual({ id: 1, title: 'string', status: 'TODO' });
  });

  it('Should Move Task', async () => {
    Database.getTask = jest.fn(
      MockDatabase.getTask
    );
    Database.updateTask = jest.fn(
      MockDatabase.updateTask
    );
    const task = await TaskController.moveTask({
      id: 1,
      beforeId: 1,
      afterId: 2
    });
    expect(task).toEqual({ id: 1, title: 'string', status: 'TODO' });
  });

});