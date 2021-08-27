import {fork} from 'redux-saga/effects';
import {watcher} from './saga';
import {watcherLatestPhoto} from './sagaLatestPhoto';
import {watcherRefresh} from './sagaRefresh';
import {watcherTopPhoto} from './sagaTopPhoto';

export function* globalWatcher() {
  yield fork(watcher);
  yield fork(watcherRefresh);
  yield fork(watcherTopPhoto);
  yield fork(watcherLatestPhoto);
}
