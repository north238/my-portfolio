'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import styles from './ImageSlider.module.css';
import WorkCard from './WorkCard';

const ImageSlider = () => {
  return (
    <div>
      <Box className={styles.wrap}>
        <ul className={`${styles.list} ${styles.listLeft}`}>
          <li className={styles.item}>
            <WorkCard
              img={'img_work_01'}
              alt={'実績画像'}
              title={'庭屋すぎ蔵'}
              text={'友人のホームページ作成'}
              caption={'<使用言語など> next.js, Resend, React Email'}
              url={'/work/work_01'}
            />
          </li>
          <li className={styles.item}>
            <WorkCard
              img={'img_work_02'}
              alt={'実績画像'}
              title={'TodoList'}
              text={'TodoList Webアプリケーション'}
              caption={'<使用言語など> HTML CSS TypeScript'}
              url={'/work/work_02'}
            />
          </li>
          <li className={styles.item}>
            <WorkCard
              img={'img_work_03'}
              alt={'実績画像'}
              title={'My資産'}
              text={'資産管理 Webアプリケーション'}
              caption={'<使用言語など> JavaScript, MongoDB, Express'}
              url={'/work/work_03'}
            />
          </li>
          <li className={styles.item}>
            <WorkCard
              img={'img_work_04'}
              alt={'実績画像'}
              title={'stocker'}
              text={'在庫管理 Webアプリケーション'}
              caption={'<使用言語など> JavaScript, React, MongoDB, Express'}
              url={'/work/work_04'}
            />
          </li>
        </ul>
        <ul className={`${styles.list} ${styles.listLeft}`}>
          <li className={styles.item}>
            <WorkCard
              img={'img_work_01'}
              alt={'実績画像'}
              title={'庭屋すぎ蔵'}
              text={'友人のホームページ'}
              caption={'<使用言語など> next.js, Resend, React Email'}
              url={'/work/work_01'}
            />
          </li>
          <li className={styles.item}>
            <WorkCard
              img={'img_work_02'}
              alt={'実績画像'}
              title={'TodoList'}
              text={'TodoList Webアプリケーション'}
              caption={'<使用言語など> HTML CSS TypeScript'}
              url={'/work/work_02'}
            />
          </li>
          <li className={styles.item}>
            <WorkCard
              img={'img_work_03'}
              alt={'実績画像'}
              title={'My資産'}
              text={'資産管理 Webアプリケーション'}
              caption={'<使用言語など> JavaScript, MongoDB, Express'}
              url={'/work/work_03'}
              />
          </li>
          <li className={styles.item}>
            <WorkCard
              img={'img_work_04'}
              alt={'実績画像'}
              title={'stocker'}
              text={'在庫管理 Webアプリケーション'}
              caption={'<使用言語など> JavaScript, React, MongoDB, Express'}
              url={'/work/work_04'}
            />
          </li>
        </ul>
      </Box>
    </div>
  );
};

export default ImageSlider;
