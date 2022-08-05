import { useTransactions } from '../../hooks/useTransactions';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      console.log(acc.total);

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={income} alt="income" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-ca', {
            style: 'currency',
            currency: 'CAD',
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcome} alt="outcome" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat('en-ca', {
            style: 'currency',
            currency: 'CAD',
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Balance</p>
          <img src={total} alt="total" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-ca', {
            style: 'currency',
            currency: 'CAD',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
