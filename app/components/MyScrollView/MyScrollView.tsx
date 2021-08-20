import React from 'react';
import {RefreshControl, FlatList} from 'react-native';
interface IMyScrollProp {
  isRefreshing: boolean;
  onRefresh: () => void;
}

export const MyScrollView: React.FC<IMyScrollProp> = ({
  isRefreshing,
  onRefresh,
  ...props
}) => {
  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
      data={[]}
      renderItem={null}
      ListHeaderComponent={() => (
        <React.Fragment>{props.children}</React.Fragment>
      )}
      ListEmptyComponent={null}
      keyExtractor={() => 'blank'}
      {...props}
    />
  );
};
