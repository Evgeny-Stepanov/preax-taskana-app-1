import { IncomingTaskPlaceholder } from "../incomingTasksPlaceholder/IncomingTasksPlaceholder";

export const TaskList = ({ tasks }) => {
  if (!tasks?.length) {
    return <IncomingTaskPlaceholder />;
  }

  return (
    <ul>
      <li></li>
    </ul>
  );
};
