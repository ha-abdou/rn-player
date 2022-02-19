import React, {memo} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

function renderByTwo<T>(children: T[], i: number = 0): React.ReactNode {
  return (
    <>
      <View style={styles.container}>
        {children[i]}
        {children[i + 1]}
      </View>
      {i < children.length && renderByTwo(children, i + 2)}
    </>
  );
}

interface IGridScrollViewProps {
  children: React.ReactNode[];
}
export const GridScrollView = memo(({children}: IGridScrollViewProps) => {
  return (
    <ScrollView>{renderByTwo(React.Children.toArray(children))}</ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
