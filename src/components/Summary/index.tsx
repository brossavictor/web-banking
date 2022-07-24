import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={income} alt="income" />
        </header>
        <strong>CAD 1000.00</strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcome} alt="outcome" />
        </header>
        <strong>CAD -250.00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Balance</p>
          <img src={total} alt="total" />
        </header>
        <strong>CAD 750.00</strong>
      </div>
    </Container>
  );
}
