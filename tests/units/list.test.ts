import ListController from "../../src/controller/list"
import Database from "../../src/adapter/database"
import MockDatabase from "../../src/adapter/__mocks__/database"
describe("List Controller Tests Suite", () => {
  it('Should Get List success', async () => {
    Database.getList = jest.fn(
      MockDatabase.getList
    );
    const task = await ListController.getList();
    expect(Database.getList).toBeCalled()
    expect(task).toEqual([{"id": 1, "tasks": [{"id": 1, "status": "TODO", "title": "Home Work"}, {"id": 2, "status": "DONE", "title": "Class Work"}], "title": "School TODO"}]);
  });
  it('Should Create List success', async () => {
    Database.createList = jest.fn(
      MockDatabase.createList
    );
    const task = await ListController.createList({
      title: "name"
    });
    expect(Database.createList).toBeCalled()
    expect(task).toEqual({id:1,title: 'name'});
  });
});