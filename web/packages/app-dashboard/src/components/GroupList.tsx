import React from 'react';
import MaterialTable from 'material-table';

export default function GroupList(props) {
  const [state, setState] = React.useState(props.tableData.groupList);
  React.useEffect(() => {
    setState(prevState => {
      const data = [...prevState.data];
      const newData = props.tableData.groupList;

      data.length = 0;
      for (let index = 0; index < newData.data.length; index++) {
        data.push(newData.data[index]);
      }

      return { ...prevState, data };
    });
  }, [props.tableData.groupList, props.tableData.groupList.data.length]);

  function handleGroupDelete(data) {
    props.onGroupDelete(data);
  }

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
        options={{ selection: true }}
        actions={[
          {
            tooltip: 'Remove All Selected Groups',
            icon: 'delete',
            onClick: (event: any, dataArray: any[]) =>
              setState(prevState => {
                const data = [...prevState.data];
                for (let i = 0; i < dataArray.length; i++) {
                  data.splice(data.indexOf(dataArray[i]), 1);
                }
                handleGroupDelete(data);
                return { ...prevState, data };
              })
          }
        ]}
      />
    </div>
  );
}
