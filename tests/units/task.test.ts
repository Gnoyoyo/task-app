import TaskController from "../../src/controller/task"
describe("Task Manager Validity", () => {
  it('Should Create Task', async () => {
    const task = await TaskController.createTask("name",1);
    expect(task).toBe(1);
  });
});