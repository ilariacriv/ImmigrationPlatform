import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TopicPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t(`topics.${id}.title`)}</h1>
      <p>{t(`topics.${id}.description`)}</p>
    </div>
  );
};

export default TopicPage;