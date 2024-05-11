import React, { useState,  } from "react";
import ColumnCard from "../../Entities/Column/UI/ColumnCard/ui";
import { Modal } from "../../Shared/UI/Modal/ui";
import {ColumnItem} from "../../Entities/Column";
import { useAppSelector } from "../../Shared";
import { UpdateColumnForm } from "../../Entities/Column";
import { UpdateTaskForm } from "../../Entities/Task";
import { TaskItem } from "../../Entities/Task/Model/type";
import TaskCard from "../../Entities/Task/Model/Ui/TaskCard/ui";

interface TaskCardWrapProps {
    TaskItem: TaskItem;
    color: {
        r: number;
        g: number;
        b: number;
    }
}
export const TaskCardWrap = ({TaskItem, color }: TaskCardWrapProps) => {
  // const dispatch = useAppDispatch();
  // 
    const ColumnsState = useAppSelector((state) => state.ColumnsReducer);

    const [ShowUpdateTask, setShowUpdateTask] = useState<boolean>(false);

    return (
        <>
        <TaskCard
            name={TaskItem.name} 
            id={TaskItem.id}
            description={TaskItem.description}
            status={TaskItem.status}
            tag={TaskItem.tags}
            color={color}
            editFun={() => { setShowUpdateTask(true) }} 
            deleteFun={() => { console.log("dfsfs") }} 
            />

        <Modal setIsShow={setShowUpdateTask} isShow={ShowUpdateTask}>
            {ShowUpdateTask && (
            <UpdateTaskForm
                taskItem={{
                    id:"",
                    name:"",
                    description:"",
                    tags:[""],
                    status:""
                }}
                onClickSaveBtn={() => {
                    setShowUpdateTask(false);
                }}
                onClickCanselBtn={() => {
                    setShowUpdateTask(false);
                }}
            />
            )}
        </Modal>
        </>
    );
};
