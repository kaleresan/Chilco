import React from 'react';
import MaterialTable from 'material-table';

export default function ProcessList() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Process Name', field: 'name' }
    ],
    data: [
      { name: 'Firefox' },
      { name: 'Chrome' },
      { name: 'Minecraft' },
      { name: 'Edge' },
      { name: 'Word' }
    ],
  });

  return (
    <div>
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <MaterialTable
      title="Process List"
      columns={state.columns}
      data={state.data}
      options={{selection: true}}
      actions={[
          {
            tooltip: 'Remove All Selected Processes',
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
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
    </div>
  );
}
