import Model, { attr } from '@ember-data/model';

export default class PublicServicesModel extends Model {
  @attr title;
  @attr description;
}
