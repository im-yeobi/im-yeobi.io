// @flow strict
import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';

type Props = {
  date: string
};

const Meta = ({ date }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>{moment(date).format('MMMM DD, YYYY')}</p>
  </div>
);

export default Meta;
