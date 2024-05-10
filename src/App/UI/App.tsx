import React from "react";
import "./App.css";
import { setupStore } from "../../Shared";
import { Provider } from "react-redux";
import { MainPage } from "../../Page/Main";

function App() {
  const store = setupStore();
  // const [ShowCreateTask, setShowCreateTask] = useState<boolean>(false);
  // const [ShowUpdateTask, setShowUpdateTask] = useState<boolean>(false);

  // const [ShowUpdateColumn, setShowUpdateColumn] = useState<boolean>(false);
  // const columnsList: ColumnItem[] = [
  //   {
  //     name: "test1",
  //     color: "white",
  //     position: "",
  //     id: "1",
  //   },
  //   {
  //     name: "test2",
  //     color: "white",
  //     position: "test1",
  //     id: "2",
  //   },
  //   {
  //     name: "test3",
  //     color: "green",
  //     position: "test2",
  //     id: "3",
  //   },
  //   {
  //     name: "test4",
  //     color: "pink",
  //     position: "test3",
  //     id: "4",
  //   },
  // ];
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Button
          onClick={() => {
            setShowCreateTask(true);
          }}
        >
          Создать Задачу
        </Button>
        <Button
          onClick={() => {
            setShowUpdateTask(true);
          }}
        >
          Изменить Задачу
        </Button>

        <Button
          onClick={() => {
            setShowUpdateColumn(true);
          }}
        >
          Изменить Колонку
        </Button>
        <Modal setIsShow={setShowCreateTask} isShow={ShowCreateTask}>
          {ShowCreateTask && (
            <CreateTaskForm
              status="kdmckdm"
              onClickSaveBtn={() => {
                setShowCreateTask(false);
              }}
              onClickCanselBtn={() => {
                setShowCreateTask(false);
              }}
            />
          )}
        </Modal>
        <Modal setIsShow={setShowUpdateTask} isShow={ShowUpdateTask}>
          {ShowUpdateTask && (
            <UpdateTaskForm
              taskItem={{
                description: "eijcdc jjicj njcjiji mnjckc ",
                name: "jnjejicfncjvc k m",
                tags: ["qqqqqqqqqqqq", "wwwwwwwwwwwwwww", "eeeeeeeeeeee"],
                status: "kdmckdm",
                id: "1",
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

        <Modal setIsShow={setShowUpdateColumn} isShow={ShowUpdateColumn}>
          {ShowUpdateColumn && (
            <UpdateColumnForm
              columnsList={columnsList}
              columnItem={{
                name: "kncjdcn ",
                color: "red",
                id: "1",
                position: "",
              }}
              onClickSaveBtn={() => {
                setShowUpdateColumn(false);
              }}
              onClickCanselBtn={() => {
                setShowUpdateColumn(false);
              }}
            />
          )}
        </Modal> */}
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
