import React from 'react';
import MaterialTable from 'material-table';

export default function GroupList() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Group Name', field: 'name' }
    ],
    data: [
      { name: 'Browsers' },
      { name: 'Games' },
      { name: 'Text Editors' }
    ],
  });

  return (
    <div>
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <MaterialTable
      title="Group List"
      columns={state.columns}
      data={state.data}
      options={{selection: true}}
      actions={[
        {
          tooltip: 'Remove All Selected Groups',
          icon: 'delete',
          onClick: (evt, dataArray) =>
              setState(prevState => {
                const data = [...prevState.data];
                for (var i = 0; i < dataArray.length; i++) {
                  data.splice(data.indexOf(dataArray[i]), 1);
                }
                return { ...prevState, data };
              })
        }
        ]}
    />
    </div>
  );
}
