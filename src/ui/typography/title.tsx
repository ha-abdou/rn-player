import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, StyleProp, TextStyle} from 'react-native';

export type TTitleLevel = 1 | 2 | 3 | 4 | 5;
export interface ITitleProps {
  level?: TTitleLevel;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

interface IGetTextStyleParams {
  level: TTitleLevel;
  style?: StyleProp<TextStyle>;
}
const getTextStyle = ({level, style}: IGetTextStyleParams) => {
  const fontSize = ('level-' + level) as keyof typeof FontSizes;

  return [FontSizes[fontSize], style];
};

export const Title = ({level = 1, children, style}: ITitleProps) => {
  const [_style, setStyle] = useState(() => getTextStyle({level, style}));

  useEffect(() => {
    setStyle(getTextStyle({level, style}));
  }, [level, style]);

  return <Text style={_style}>{children}</Text>;
};

const FontSizes = StyleSheet.create({
  'level-1': {
    fontSize: 22,
    fontWeight: '100',
  },
  'level-2': {
    fontSize: 16,
  },
  'level-3': {
    fontSize: 14,
  },
  'level-4': {
    fontSize: 12,
  },
  'level-5': {
    fontSize: 10,
  },
});
