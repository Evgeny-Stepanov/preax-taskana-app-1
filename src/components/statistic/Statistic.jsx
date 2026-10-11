import { StatisticPlaceholder } from "../statisticPlaceholder/StatisticPlaceholder";

export const Statistic = ({ metrics }) => {
  return <>{!metrics && <StatisticPlaceholder />}</>;
};
