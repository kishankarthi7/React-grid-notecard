import React from 'react';
import NoteCard from './NoteCard';

function NoteCardList(props) {
  return (
    <div>
      {props.notecardDataGrids.map(datagrid => (
        <NoteCard datagrid={datagrid} />
      ))}
    </div>
  );
}
export default NoteCardList;
