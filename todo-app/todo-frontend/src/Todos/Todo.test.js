import { render, screen } from "@testing-library/react";
import { SingleTodo } from "./List";

const todo = {
  id: 1,
  text: "Learn React",
  done: false,
};
const onClickComplete = () => {
  console.log("onClickComplete");
};

const onClickDelete = () => {
  console.log("onClickDelete");
};
test("Todo renders right text and button", () => {
    render(
        <SingleTodo
        todo={todo}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
        />
    );
    expect(screen.getByText(todo.text)).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.getByText("Set as done")).toBeInTheDocument();
});
