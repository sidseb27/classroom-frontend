import {BaseRecord,DataProvider,GetListResponse,GetListParams} from "@refinedev/core";
import {Mock_Subject} from "../constants/mock-data";

export const dataProvider: DataProvider = {
  getList:async <TData extends BaseRecord = BaseRecord>( {resource} :
GetListParams): Promise<GetListResponse<TData>> => {
  if(resource != 'subjects') return  {data: []as TData[], total:0};
    return {
      data: Mock_Subject as unknown as TData[],
      total: Mock_Subject.length,
    }
  },
getOne: async () => {throw new Error('This function is not present n mock')},
  create: async () => {throw new Error('This function is not present n mock')},
  update: async () => {throw new Error('This function is not present n mock')},
  deleteOne: async () => {throw new Error('This function is not present n mock')},
  getApiUrl:() => '',
}
