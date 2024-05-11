import React, { useState,  } from "react";
import ColumnCard from "../../Entities/Column/UI/ColumnCard/ui";
import { Modal } from "../../Shared/UI/Modal/ui";
import {ColumnItem} from "../../Entities/Column";
import { useAppSelector } from "../../Shared";
import { UpdateColumnForm } from "../../Entities/Column";
import { UpdateTaskForm } from "../../Entities/Task";
import { TaskItem } from "../../Entities/Task/Model/type";
import TaskCard from "../../Entities/Task/Model/Ui/TaskCard/ui";

interface TaskCardWrapProps extends TaskItem {
    
}
export const TaskCardWrap = ({ ...props }: TaskCardWrapProps) => {
  // const dispatch = useAppDispatch();
  // 
    const ColumnsState = useAppSelector((state) => state.ColumnsReducer);

    const [ShowUpdateTask, setShowUpdateTask] = useState<boolean>(false);

    return (
        <>
        <TaskCard  {...props}
            name={""} 
            id={""}
            description={""}
            status=""
            tag={[""]}
            color={{ r: 0, g: 0, b: 0 }}
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
