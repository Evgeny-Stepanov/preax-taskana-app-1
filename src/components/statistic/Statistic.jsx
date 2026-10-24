import { StatisticPlaceholder } from "../statisticPlaceholder/StatisticPlaceholder";

export const Statistic = ({ metrics }) => {
  if (!metrics?.length) {
    return <StatisticPlaceholder />;
  }
};
