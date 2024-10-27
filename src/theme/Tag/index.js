import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
export default function Tag({permalink, label, count, description}) {
  return (
    <md-assist-chip
      title={description}
      label={(count) ? (`${label} (${count})`) : (label)}
      role="presentation"
      href={permalink}
    ></md-assist-chip>
  );
}
