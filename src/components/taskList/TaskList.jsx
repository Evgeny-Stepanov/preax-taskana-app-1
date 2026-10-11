import { IncomingTaskPlaceholder } from "../incomingTasksPlaceholder/IncomingTasksPlaceholder";

export const TaskList = ({ tasks }) => {
  return <>{!tasks && <IncomingTaskPlaceholder />}</>;
};
