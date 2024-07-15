import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import QuizComponent  from '../../components/QuizComponent.jsx';

const Test: NextPage = () => {
  return (
    <div className='mt-[90px]'>
      <QuizComponent />
    </div>
  );
};

export default Test;
