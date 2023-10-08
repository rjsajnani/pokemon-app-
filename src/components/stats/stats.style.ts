import { StyleSheet } from 'react-native';

export const StatsStyle = StyleSheet.create({
  container: {
    padding: 20,
  },
  powerContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  powerText: {
    width: '30%',
  },
  progressBarContainer: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    width: '12%',
    fontSize: 12,
    fontWeight: 'bold',
  },
  percentageBarContainer: {
    backgroundColor: '#dedede',
    width: 200,
    height: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
});
