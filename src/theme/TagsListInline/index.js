import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Tag from '@theme/Tag';
import styles from './styles.module.css';
export default function TagsListInline({tags}) {
  return (
    <>
      <b>
        <Translate
          id="theme.tags.tagsListLabel"
          description="The label alongside a tag list">
          Tags:
        </Translate>
      </b>
      <ul className={clsx(styles.tags, 'padding--none', 'margin-left--sm', 'tags-wrapper')}>
        <md-chip-set>
          {tags.map((tag) => (
            <Tag key={tag.permalink} {...tag} />
          ))}
        </md-chip-set>
      </ul>
    </>
  );
}
