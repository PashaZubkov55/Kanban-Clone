import { configureStore } from "@reduxjs/toolkit";
import taskListSlice from "./taskList/taskListSlice";

export const store = configureStore({
    reducer:{
        taskList: taskListSlice

    }
})