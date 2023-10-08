export interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export type StatsProps = {
  stats: Stat[];
};
