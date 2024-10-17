import React from 'react';
import { useTranslation } from 'react-i18next';

const TextList = (props) => {
    const { t } = useTranslation(props.ns);
    const translationPath = `${props.path}.list`;

    const items = t(`${translationPath}.items`, { returnObjects: true });

    // Ensure items is an array
    if (!Array.isArray(items)) {
        console.error(`Expected an array for ${translationPath}.items, but got:`, items);
        return null;
    }

    return (
        <ul style={styles.list}>
            <p>{t(`${translationPath}.text`)}</p>
            <ul>
                {items.map((item, index) => (
                    <li key={`${props.path}-item-${index}`}>{item}</li>
                ))}
            </ul>
        </ul>
    );
};
const styles = {
    list: {
        paddingLeft: 0,
        margin: 0,
    },
};

export default TextList;