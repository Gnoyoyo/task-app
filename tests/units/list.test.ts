import ListController from "../../src/controller/list"
import Database from "../../src/adapter/database"
import MockDatabase from "../../src/adapter/mock-database"
describe("Task Manager Validity", () => {
  it('Should Get List', async () => {
    Database.getList = jest.fn(
      MockDatabase.getList
    );
    const task = await ListController.getList();
    expect(task).toEqual([{"id": 1, "tasks": [{"id": 1, "status": "TODO", "title": "Home Work"}, {"id": 2, "status": "DONE", "title": "Class Work"}], "title": "School TODO"}]);
  });
  it('Should Create List', async () => {
    Database.createList = jest.fn(
      MockDatabase.createList
    );
    const task = await ListController.createList({
      title: "name"
    });
    expect(task).toEqual({id:1,title: 'name'});
  });
});