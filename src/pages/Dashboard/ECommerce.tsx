import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import TableOne from '../../components/TableOne.tsx';

const ECommerce = () => {
  return (
    <>
        <div className="grid grid-cols-5 gap-5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
        <CardOne />
      </div>

      <div className="mt-4">
          <TableOne />
      </div>
    </>
  );
};

export default ECommerce;
