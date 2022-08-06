import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IComment} from 'src/types';

interface IComments {
  comments: IComment[];
}

export const Comments: React.FC<IComments> = ({comments}) => {
  return (
    <View>
      {comments.map(comment => (
        <Text key={comment.id}>{comment.body}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});
