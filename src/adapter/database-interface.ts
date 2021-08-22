export interface createListRequest {
  title :string   
}

export interface createListResponse {
  id : number
  title :string
}
  
export interface getListResponse {
  id :number
  title :string
  tasks: {
    id: number
    title: string
    status: string
  }[]
}

export interface createTaskRequest {
  listId :number
  title :string
}
  
export interface createTaskResponse {
  id :number
  title :string
  status: string
}

export interface updateTaskRequest {
  id :number
  title?: string
  order? :string
  status? :string
}
    
export interface updateTaskResponse {
  id :number
  title :string
  status: string
}




