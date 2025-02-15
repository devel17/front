
import { ColumnProps } from 'ant-design-vue/es/table/interface';
type Key = ColumnProps['key'];

export interface Client {
  key: Key;
  name: string;
  age: number;
  address: string;
  phone: string;
  email: string;
  status: 'active' | 'inactive';
  region: string;
  registrationDate: string;
}