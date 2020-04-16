//import { action } from '@storybook/addon-actions';
import {Video} from '../src/index';

export default {
  title: 'Video',
  component: Video,
};

export const Sample = () => ({
  Component: Video,
  props: { cloud_name: 'demo', public_id: 'dog', controls: true},
});
