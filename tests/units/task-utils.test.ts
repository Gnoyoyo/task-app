import TaskUtils from "../../src/controller/task-utils";
import Database from "../../src/adapter/database"
import MockDatabase from "../../src/adapter/__mocks__/database"

describe("Task Status Tests Suite", () => {
  it('Should Validate Status to true when found in list', async () => {

    const isValid = await TaskUtils.validateStatus("TODO");
    expect(isValid).toEqual(true);
  });

  it('Should Validate Status to false when not found in list', async () => {

    const isValid = await TaskUtils.validateStatus("NOT_TODO");
    expect(isValid).toEqual(false);
  });
});

describe("calculateNewTaskPosition Tests Suite", () => {
  it('Should calculate new Task Position with both beforeId and afterId', async () => {
    Database.getTask = jest.fn(
      MockDatabase.getTask
    );
    const isValid = await TaskUtils.calculateNewTaskPosition({
      listId:1,
      beforeId:1,
      afterId:1
    })
    expect(isValid).toEqual(1);
  });
  
  it('Should calculate new Task Position with only beforeId', async () => {
    Database.getTask = jest.fn(
      MockDatabase.getTask
    );
    const isValid = await TaskUtils.calculateNewTaskPosition({
      listId:1,
      beforeId:1,
    })
    expect(isValid).toEqual(0.5);
  });

  it('Should calculate new Task Position with only afterId', async () => {
    Database.getTask = jest.fn(
      MockDatabase.getTask
    );
    const isValid = await TaskUtils.calculateNewTaskPosition({
      listId:1,
      afterId:1,
    })
    expect(isValid).toEqual(101);
  });

  it('Should not calculate new Task Position without beforeId and afterId', async () => {
    Database.getTask = jest.fn(
      MockDatabase.getTask
    );
    try {
      await TaskUtils.calculateNewTaskPosition({
        listId:1
      })        
    } catch (error) {
      expect(error).toEqual(new Error("ERROR : beforeId or afterId must exist"));        
    }
  });

});