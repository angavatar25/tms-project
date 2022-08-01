import moment from 'moment';

export const parseDateOfBirth = (date) => {
  const momentParsed = moment(date).format('MMMM Do YYYY');
  return momentParsed
}