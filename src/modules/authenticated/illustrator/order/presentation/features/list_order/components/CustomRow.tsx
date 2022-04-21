import { Tooltip } from "antd";


function CustomRow(props:any) {
  return (
    <Tooltip  title="Klik 2x untuk melihat detail order">
      <tr {...props} />
    </Tooltip>
  );
}

export default CustomRow