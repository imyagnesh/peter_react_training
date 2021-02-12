import FormikSelect from '../../components/FormikSelect';
import FormikTextInput from '../../components/FormikTextInput';

const category = [
  { value: '', text: 'Select Category' },
  { value: 'mobile', text: 'Mobile' },
  { value: 'computer', text: 'Computer' },
];

const manufacturer = [
  { value: '', text: 'Select manufacturer' },
  { value: 'apple', text: 'ipone', productCategory: 'mobile' },
  { value: 'samsung', text: 'a12', productCategory: 'mobile' },
  { value: 'HP', text: 'HP pavalioon', productCategory: 'computer' },
  { value: 'apple', text: 'macbook pro', productCategory: 'computer' },
];

export const fields = [
  {
    name: 'productName',
    label: 'Product Name',
    value: '',
    component: FormikTextInput,
    validate: value => {
      if (!value) {
        return 'require';
      }
    },
  },
  {
    name: 'productPrice',
    label: 'product Price',
    value: '',
    component: FormikTextInput,
    validate: value => {
      if (!value) {
        return 'require';
      }
    },
  },
  {
    name: 'stock',
    label: 'product Stock',
    type: 'number',
    value: '',
    component: FormikTextInput,
    validate: value => {
      if (!value) {
        return 'require';
      }
    },
  },
  {
    name: 'productCategory',
    label: 'product Category',
    value: '',
    component: FormikSelect,
    options: category,
    validate: value => {
      if (!value) {
        return 'require';
      }
    },
  },
  {
    name: 'manufacturer',
    label: 'Manufacturer',
    value: '',
    mapTo: 'productCategory',
    options: manufacturer,
    component: FormikSelect,
    validate: value => {
      if (!value) {
        return 'require';
      }
    },
  },
];

export const initialValues = fields.reduce((p, c) => ({ ...p, [c.name]: c.value }), {});
