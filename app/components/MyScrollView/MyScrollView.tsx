import React from 'react';
import {RefreshControl} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

interface IMyScrollProp {
  isRefreshing: boolean;
  onRefresh: () => void;
}

export const MyScrollView: React.FC<IMyScrollProp> = props => {
  console.log(props);
  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={props.isRefreshing}
          onRefresh={props.onRefresh}
        />
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
