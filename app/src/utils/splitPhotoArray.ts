import {IApiData} from '../interfaces/interfaces';

const insertEvenOrOddinObj = (arr: Array<IApiData>, value: string) => {
  return arr.map(el => {
    return {
      ...el,
      idColumn: value,
    };
  });
};

export function splitPhotoArray(arr: Array<IApiData>) {
  const even = arr.filter((el: IApiData, i: number) => i % 2 === 0);
  const odd = arr.filter((el: IApiData, i: number) => i % 2 !== 0);
  return {
    even: insertEvenOrOddinObj(even, 'even'),
    odd: insertEvenOrOddinObj(odd, 'odd'),
  };
}
