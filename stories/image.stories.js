//import { action } from '@storybook/addon-actions';
import {Image} from '../src/index';

export default {
  title: 'Image',
  component: Image,
};

export const Sample = () => ({
  Component: Image,
  props: { cloud_name: 'demo', public_id: 'sample'}
});
