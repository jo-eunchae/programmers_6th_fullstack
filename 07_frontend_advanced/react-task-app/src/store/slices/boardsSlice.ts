import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardState = {
    modalActive: boolean;
    boardArray: IBoard[];
};

const initialState: TBoardState = {
    modalActive: false,
    boardArray: [
        {
            boardId: 'board-1',
            boardName: '첫 번째 게시물',
            lists: [
                {
                    listId: 'list-0',
                    listName: 'List 1',
                    tasks: [
                        {
                            taskId: 'task-0',
                            taskName: 'Task 1',
                            taskDescription: 'description',
                            taskOwner: 'John',
                        },
                        {
                            taskId: 'task-1',
                            taskName: 'Task 2',
                            taskDescription: 'description',
                            taskOwner: 'John',
                        }
                    ]
                },
                {
                    listId: 'list-1',
                    listName: 'List 2',
                    tasks: [
                        {
                            taskId: 'task-2',
                            taskName: 'Task 3',
                            taskDescription: 'description',
                            taskOwner: 'John',
                        }
                    ]
                }
            ]
        }
    ]
};

const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {

    }
});

export const boardsReducer = boardsSlice.reducer;