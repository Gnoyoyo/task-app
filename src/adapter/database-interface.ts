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
  order : number
}
  
export interface createTaskResponse {
  id :number
  title :string
  status: string
}

export interface updateTaskRequest {
  id :number
  title?: string
  order? :number
  status? :string
}
    
export interface updateTaskResponse {
  id :number
  title :string
  status: string
}

export interface getTaskRequest {
  id :number
}
    
export interface getTaskResponse {
  id :number
  title :string
  status: string
  order: number
  listId: number
}

export interface getLastTaskRequest {
  listId :number
}
    
export interface getLastTaskResponse {
  id :number
  title :string
  status: string
  order: number
}

export interface getFirstRequest {
  listId :number
}
    
export interface getFirstResponse {
  id :number
  title :string
  status: string
  order: number
}




