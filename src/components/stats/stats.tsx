import { View, ViewStyle } from 'react-native';
import { Text } from '../common';
import { StatsStyle as styles } from './stats.style';
import { StatsProps as Props } from './stats.props';
import React from 'react';

export const Stats: React.FC<Props> = (props) => {
  const { stats } = props;

  const calculatePercentage = React.useMemo(
    () =>
      (value: number): ViewStyle => {
        return {
          backgroundColor: value > 49 ? '#00ac17' : '#ff3e3e',
          width: `${(value / 100) * 100}%`,
        };
      },
    [],
  );

  return (
    <View style={styles.container}>
      <Text text="Pokemon Stats" presets="header2" />
      {stats.map((stat, index) => {
        return (
          <View key={index} style={styles.powerContainer}>
            <Text
              presets="body2"
              text={stat.stat.name}
              style={styles.powerText}
            />
            <View style={styles.progressBarContainer}>
              <Text style={styles.number} text={stat.base_stat.toString()} />
              <View style={styles.percentageBarContainer}>
                <View
                  style={{
                    ...styles.bar,
                    ...calculatePercentage(stat.base_stat),
                  }}
                ></View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};
