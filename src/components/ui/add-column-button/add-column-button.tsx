import {TouchableHighlight} from 'react-native';
import React from 'react';
import PlusIcon from 'src/assets/icons/plus-icon';

interface IAddColumnButton {
  onPress: () => void;
}

export const AddColumnButton: React.FC<IAddColumnButton> = ({onPress}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <PlusIcon />
    </TouchableHighlight>
  );
};
