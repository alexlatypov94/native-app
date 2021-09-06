import {fork} from 'redux-saga/effects';
import {watcher} from './saga';
import {authWatcher} from './sagaAuth';
import {watcherLatestPhoto} from './sagaLatestPhoto';
import {likedPhotoWatcher} from './sagaLikedPhotoDB';
import {watcherRefresh} from './sagaRefresh';
import {watcherTopPhoto} from './sagaTopPhoto';

export function* globalWatcher() {
  yield fork(watcher);
  yield fork(watcherRefresh);
  yield fork(watcherTopPhoto);
  yield fork(watcherLatestPhoto);
  yield fork(authWatcher);
  yield fork(likedPhotoWatcher);
}
