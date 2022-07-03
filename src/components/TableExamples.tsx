import { Table } from "react-bootstrap";

function Example1(props) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Employee</th>
          <th>Manager</th>
          <th>Team</th>
          <th>Groups</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((employee) => {
          return (
            <tr>
              <td>{employee.name}</td>
              <td>{employee.manager}</td>
              <td>{employee.team}</td>
              <td>
                {employee.groups.map((group) => {
                  return (
                    <div>
                      <a href={"#" + group}>{group}</a>
                    </div>
                  );
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

function Example2(props) {
  return (
    <Table striped variant="dark" bordered hover size="sm">
      <thead>
        <tr>
          <th>Employee</th>
          <th>Manager</th>
          <th>Team</th>
          <th>Groups</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((employee) => {
          return (
            <tr>
              <td>{employee.name}</td>
              <td>{employee.manager}</td>
              <td>{employee.team}</td>
              <td>
                {employee.groups.map((group) => {
                  return (
                    <div>
                      <a href={"#" + group}>{group}</a>
                    </div>
                  );
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
export { Example1, Example2 };
