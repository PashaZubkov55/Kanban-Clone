import { createSlice } from "@reduxjs/toolkit";

const TaskListSlice = createSlice({
    name: 'taskList',
    initialState:{
        name: 'taskList',
        taskList:[]
    }

})

export default TaskListSlice.reducer