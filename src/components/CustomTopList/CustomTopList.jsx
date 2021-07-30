/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import style from './customTopList.module.scss';
import CustomCardMovie from '../CustomCardMovie/CustomCardMovie';
const CustomTopList = (props) => {
  const pelis = [
    {
      id: 0,
      name: 'daniel',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 1,
      name: 'bryan',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 3,
      name: 'daniel',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 4,
      name: 'bryan',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 5,
      name: 'daniel',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 6,
      name: 'bryan',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 7,
      name: 'daniel',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 8,
      name: 'bryan',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 6,
      name: 'bryan',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 7,
      name: 'daniel',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 8,
      name: 'bryan',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
  ];
  return (
    <div className={style.cards}>
      {pelis.map((pel, i) => {
        return <CustomCardMovie />;
      })}
    </div>
  );
};

CustomTopList.propTypes = {};

export default CustomTopList;
