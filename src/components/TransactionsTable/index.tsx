import { Container } from './styles';

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website development</td>
            <td className="deposit">CAD 12,000</td>
            <td>Development</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Lorem ipsum.</td>
            <td className="withdraw">Lorem ipsum.</td>
            <td>Lorem ipsum.</td>
            <td>Lorem ipsum.</td>
          </tr>
          <tr>
            <td>Lorem ipsum.</td>
            <td className="deposit">Lorem ipsum.</td>
            <td>Lorem ipsum.</td>
            <td>Lorem ipsum.</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
