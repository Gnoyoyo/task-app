# task-app

GraphQL Task Management Application

This is a simple task Management Service using GraphQL and SQLite

Feature :  
    Create a new List ✅  
    Create a new task in a list ✅   
     (New task must be prepend and not has been complete)  
    Update a task (title and status) ✅  
    Move a task to a specfic position in the list ✅  
    Retrieve all lists and their tasks ✅  

Remark :
There are 3 statuses "TODO", "DOING" and "DONE"

## Installation

To Install the application, run the following command

```bash
npm i
```

## Preparing Database

1. Create Folder and file for database. For example

```
./db/database.db
```

2. Create env File in project root. Inside will contain database URL

```env
DATABASE_URL="file:../db/database.db"
```

3. Lastly run the following command to prepare databases

```bash
npm run db-init
```

## Start Application

To start the application, run the following command

```bash
npm start
```

## Run Test

To run test of the application, run the following command

```bash
npm test
```

## Example

Get List
```

query GetList {
  lists {
    id
    title
    tasks {
      id
      title
      status
    }
    }
  }
}
```

Create List

```
mutation CreateList {
  createList(title:"name2"){
    title
    id
  }
}
```

Create Task

```
mutation createTask {
  createTask(title:"name3",listId:1){
    title
  }
}
```

Update Task

```
mutation updateTask {
  updateTask(id:1,status:"DONE"){
    title
    status
  }
}
```

Move Task

```
mutation moveTask {
  moveTask(id:1,beforeId:3,afterId:4){
    title
  }
}
```
